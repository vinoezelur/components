import { LightningElement, api, track, wire } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import jQueryResource from '@salesforce/resourceUrl/JQuery_3_4_1';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from "lightning/uiObjectInfoApi";
import BUILDING_TYPE from "@salesforce/schema/Account.Building_Type__c";
import { BUILDING_TYPES, SELECT_OPTION } from './twoLevelDropdownConstants';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class TwoLevelDropdown extends LightningElement {
    @api selectedOption = SELECT_OPTION;
    @api disabled;
    @api messageWhenValueMissing = "This field is required";
    @api useStaticValues;
    isValueMissing = false;
    
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    accountObject;

    @wire(getPicklistValues, {  recordTypeId: "$accountObject.data.defaultRecordTypeId", // '0122w0000012xaYAAQ', 
                                fieldApiName: BUILDING_TYPE })
        picklistResults({ error, data }) {
            if (data) {
                // console.log(JSON.stringify(data.values, null, 2));
                for (let menuitem of data.values) {
                    // Populate the Picklist
                    let sectorName = menuitem.value.split('__')[0]; // Fetch the menu item name. eg. Sector_1__Building_Type_1 => Sector_1
                    if (menuitem.value.includes('__')) {
                        // STEP 1: Form Menu Groups that have sub-Menu Items. 
                        let menuGroup = this.menuitems.find(menuitem => menuitem.value == sectorName);
                        if (!menuGroup) {
                            menuGroup = {
                                "label": sectorName.replaceAll(/_/g, " "), // convert underscores to spaces in API name, for generating labels. "Sector_1" becomes "Sector 1"
                                "value": sectorName,
                                "hasSubTypes": true,
                                "subMenuItems": [],
                                "selected": false,
                                "css": "dropdown-submenu slds-p-vertical_xxx-small"
                            };
                            this.menuitems.push(menuGroup);
                        }
                        // STEP 1A : Pushing sub-Menu Items under Menu Item Groups
                        menuGroup.subMenuItems.push({
                            "label": menuitem.label,
                            "value": menuitem.value,
                            "selected": false,
                        });
                    } else {
                        // STEP 2: Form Menu Items that have no sub-Menu Items. 
                        this.menuitems.push({
                            "label": menuitem.label,
                            "value": sectorName,
                            "hasSubTypes": false,
                            "selected": false,
                            "css": "slds-p-vertical_xxx-small"
                        });
                    }
                }
                // console.log('menuitems === ' + JSON.stringify(this.menuitems, null, 2));
                this.error = undefined;
            } else if (error) {
                this.error = error;
                this.primaryBuildingTypeOptions = undefined;
                this.secondaryBuildingTypeOptions = undefined;
            }
        }
    @track menuitems = [];
    pageLoadComplete(loading) {
        this.dispatchEvent(new CustomEvent('loadingcomplete', {
            detail: loading,
            bubbles: true,
            composed: true
        }));
    }
    connectedCallback() {
        // Loading JQuery 3.4.1
        Promise.all([
            loadScript(this, jQueryResource),
        ]).then(() => {
            this.pageLoadComplete(false);
            this.selectedOption = SELECT_OPTION;
            console.log('stat  === ' + this.useStaticValues);
            if (this.useStaticValues === 'true' || this.useStaticValues == true) {
                this.menuitems = BUILDING_TYPES;
            // } else {
            //     this.loadBuildingOptions();
            }
        }).catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error loading',
                    message: 'Error while loading Building Types',
                    variant: 'error'
                })
            );
        });
    }
    handleClickMenu(event) {
        $(this.template.querySelector('[data-id="secondary"]')).toggle(); // expand menu
        event.preventDefault();
        event.stopPropagation();
    }
    handleClickMenuItem(event) {
        // collapse menu
        $(this.template.querySelector('[data-id="secondary"]')).hide();
        event.preventDefault();
        event.stopPropagation();
        // fetch the selected option
        this.selectedOption = this.menuitems.filter(item => {
            return event.currentTarget.dataset.menuitem == item.value;
        })[0];
        // uncheck other options
        this.uncheckOtherOptions();
        // set checkmark
        this.selectedOption.selected = true;
        // dispatch event
        this.dispatch(this.selectedOption);
    }
    handleEnterMenuGroup(event) {
        this.menuitems.forEach(menuitem => {
            if (menuitem.value == event.currentTarget.dataset.menuitem) {
                $(this.template.querySelector('[data-id="' + menuitem.value + '"]')).toggle(); // expand/collapse clicked menu group
            } else {
                $(this.template.querySelector('[data-id="' + menuitem.value + '"]')).hide(); // collapse other menu groups
            }
            event.preventDefault();
            event.stopPropagation();
        });
    }
    handleClickSubMenuItem(event) {
        // fetch the selected option
        this.selectedOption = event.detail;
        // collapse the sub menu
        let menuitem = this.selectedOption.value.split('__')[0];
        $(this.template.querySelector('[data-id="' + menuitem + '"]')).hide();
        // collapse menu
        $(this.template.querySelector('[data-id="secondary"]')).hide();
        event.preventDefault();
        event.stopPropagation();
        // uncheck other options
        this.uncheckOtherOptions();
        // set checkmark for the selected Building SubType
        this.selectedOption.selected = true;
        // set styling for the selected menuitem
        this.menuitems.forEach(item => { 
            if (item.value == menuitem) {
                item.selected = true;
                item.css = "dropdown-submenu slds-p-vertical_xxx-small selected";
            } else {
                item.selected = false;
                item.css = "dropdown-submenu slds-p-vertical_xxx-small";
            }
        });
        // dispatch event
        this.dispatch(this.selectedOption);
    }
    dispatch(selectedOption) {
        this.isValueMissing = false;
        this.dispatchEvent(new CustomEvent("selected", {
            detail: selectedOption
        }));
    }
    uncheckOtherOptions() {
        this.menuitems.forEach(menuitem => menuitem.selected = false);
    }
    handleFocusOutSecondary(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this.template.querySelector('[data-id="secondary"]')).hide(); // collapse menu
        this.isValueMissing = this.selectedOption.value == 'Select'; // validation
    }

}

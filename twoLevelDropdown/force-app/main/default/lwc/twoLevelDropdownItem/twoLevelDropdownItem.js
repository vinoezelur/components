import { LightningElement, api } from 'lwc';

export default class TwoLevelDropdownItem extends LightningElement {
    @api selected;
    @api subMenuItem;
    handleSelectSubMenuItem(event) {
        event.preventDefault();
        event.stopPropagation();

        this.dispatchEvent(new CustomEvent("selected", {
            detail: this.subMenuItem
        }));
    }
    get isSelected(){
        return this.subMenuItem.value == this.selected?.value;
    }
}
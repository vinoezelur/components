# LWC/JQuery 2-level dropdown

This component renders static values or a picklist field's values as 2-level dropdown. Refer to the **package.xml** for the complete list of components.

## Assumptions:
1. Menu Items may be grouped under a **Group name**
2. Groups cannot be selected

## Data setup:
1. When the Picklist field is setup, the Group names should be prefixed to the sub-Menu Items. For ex. When adding a new sub-Menu Item **Libraries** under a Group  **Public buildings**, the picklist value to be created as below:
**Label**: Libraries
**API Name**: Public_buildings__Libraries
    1. Double underscores used as delimiters between Group names and sub-menu items
    2. underscores in names will be converted to spaces
2. Please tweak the constants file `twoLevelDropdownConstants.js` in the `twoLevelDropdown` component for static values

## Usage

### html
```
    <template>
        <c-no-building-type 
            selected-option = {buildingType} 
            use-static-values = false 
            onselected = {onBuildingTypeChange} 
            disabled = false 
            message-when-value-missing = "This field is required.">
        </c-no-building-type>
    </template>
```
### js
```
    selectedBuildingType;
    get buildingType() {
        if (this.selectedBuildingType)
            return this.selectedBuildingType;
        return { label: 'Select building Type', value: 'Select' };
    }
    onBuildingTypeChange(event) {
        this.selectedBuildingType = event.detail;
    }
```

### Record Page

When the component is used in a Record page, check the **Use Static Values** flag to control whether static values should be used for rendering the dropdown or not.
const SELECT_OPTION = ({
    "label": 'Select building type',
    "value": 'Select'
});

const BUILDING_TYPES =  [
        { "label": "Agricultural and aquacultural buildings", "value": "Agricultural_and_aquacultural_buildings", "hasSubTypes": false, "selected": false, "css": "slds-p-vertical_xxx-small" },
        { "label": "Aquatic centres", "value": "Aquatic_centres", "hasSubTypes": false, "selected": false, "css": "slds-p-vertical_xxx-small" },
        { "label": "Cemeteries and crematoriums", "value": "Cemeteries_and_crematoriums", "hasSubTypes": false, "selected": false, "css": "slds-p-vertical_xxx-small" },
        { "label": "Childcare centre", "value": "Childcare_centre", "hasSubTypes": false, "selected": false, "css": "slds-p-vertical_xxx-small" },
        { "label": "Correctional facilities", "value": "Correctional_facilities", "hasSubTypes": false, "selected": false, "css": "slds-p-vertical_xxx-small" },
        { "label": "Emergency services and police stations", "value": "Emergency_services_and_police_stations", "hasSubTypes": false, "selected": false, "css": "slds-p-vertical_xxx-small" },
        {"label": "Entertainment and recreation", "value": "Entertainment_and_recreation", "hasSubTypes": true, "subMenuItems": [
                { "label": "Sports centres", "value": "Entertainment_and_recreation__Sports_centres", "selected": false},
                { "label": "Other entertainment and recreation centres", "value": "Entertainment_and_recreation__Other_entertainment_and_recreation_centres", "selected": false}
            ], "selected": false, "css": "dropdown-submenu slds-p-vertical_xxx-small"
        },
        {
            "label": "Food retailing services", "value": "Food_retailing_services", "hasSubTypes": true, "subMenuItems": [
                { "label": "Bakeries and confectionaries", "value": "Food_retailing_services__Bakeries_and_confectionaries", "selected": false},
                { "label": "Other food retailing service", "value": "Food_retailing_services__Other_food_retailing_service", "selected": false}
            ], "selected": false, "css": "dropdown-submenu slds-p-vertical_xxx-small"
        },
        {
            "label": "Food and beverage", "value": "Food_and_beverage", "hasSubTypes": true, "subMenuItems": [
                { "label": "Restaurants and cafes", "value": "Food_and_beverage__Restaurants_and_cafes", "selected": false},
                { "label": "Pubs and clubs", "value": "Food_and_beverage__Pubs_and_clubs", "selected": false},
                { "label": "Takeaway food services and catering services", "value": "Food_and_beverage__Takeaway_food_services_and_catering_services", "selected": false},
                { "label": "Other food and beverage", "value": "Food_and_beverage__Other_food_and_beverage", "selected": false}
            ], "selected": false, "css": "dropdown-submenu slds-p-vertical_xxx-small"
        },
        {
            "label": "Gymnasiums", "value": "Gymnasiums", "hasSubTypes": true, "subMenuItems": [
                { "label": "Yoga/pilates studios", "value": "Gymnasiums__Yoga_pilates_studios", "selected": false},
                { "label": "Other gymnasiums", "value": "Gymnasiums__Other_gymnasiums", "selected": false}
            ], "selected": false, "css": "dropdown-submenu slds-p-vertical_xxx-small"
        },
        { "label": "Laboratories", "value": "Laboratories", "hasSubTypes": false, "selected": false, "css": "slds-p-vertical_xxx-small" },
        {
            "label": "Lodging and accommodation", "value": "Lodging_and_accommodation", "hasSubTypes": true, "subMenuItems": [
                { "label": "Student accommodation", "value": "Lodging_and_accommodation__Student_accommodation", "selected": false},
                { "label": "Caravan park", "value": "Lodging_and_accommodation__Caravan_park", "selected": false},
                { "label": "Other lodging and accommodation", "value": "Lodging_and_accommodation__Other_lodging_and_accommodation", "selected": false}
            ], "selected": false, "css": "dropdown-submenu slds-p-vertical_xxx-small"
        },
        {
            "label": "Manufacturing facilities", "value": "Manufacturing_facilities", "hasSubTypes": true, "subMenuItems": [
                { "label": "Bakery", "value": "Manufacturing_facilities__Bakery", "selected": false},
                { "label": "Other manufacturing facilities", "value": "Manufacturing_facilities__Other_manufacturing_facilities", "selected": false}
            ], "selected": false, "css": "dropdown-submenu slds-p-vertical_xxx-small"
        },
        { "label": "Outdoor education centres", "value": "Outdoor_education_centres", "hasSubTypes": false, "selected": false, "css": "slds-p-vertical_xxx-small" },
        {
            "label": "Public buildings", "value": "Public_buildings", "hasSubTypes": true, "subMenuItems": [
                { "label": "Libraries", "value": "Public_buildings__Libraries", "selected": false},
                { "label": "Galleries and museums", "value": "Public_buildings__Galleries_and_museums", "selected": false},
                { "label": "Courts", "value": "Public_buildings__Courts", "selected": false},
                { "label": "Religious", "value": "Public_buildings__Religious", "selected": false},
                { "label": "Community centres", "value": "Public_buildings__Community_centres", "selected": false},
                { "label": "Other public buildings", "value": "Public_buildings__Other_public_buildings", "selected": false},
                { "label": "Storage facilities", "value": "Public_buildings__Storage_facilities", "selected": false}
            ], "selected": false, "css": "dropdown-submenu slds-p-vertical_xxx-small"
        },
        {
            "label": "Transport passenger transport", "value": "Transport_passenger_transport", "hasSubTypes": true, "subMenuItems": [
                { "label": "Airports (terminals and aerodromes)", "value": "Transport_passenger_transport__Airports_terminals_and_aerodromes", "selected": false},
                { "label": "Train stations", "value": "Transport_passenger_transport__Train_stations", "selected": false},
                { "label": "Other passenger transport", "value": "Transport_passenger_transport__Other_passenger_transport", "selected": false}
            ], "selected": false, "css": "dropdown-submenu slds-p-vertical_xxx-small"
        },
        { "label": "Transport - other transport buildings", "value": "Transport_other_transport_buildings", "hasSubTypes": false, "selected": false, "css": "slds-p-vertical_xxx-small" }
    ];

export { SELECT_OPTION, BUILDING_TYPES};
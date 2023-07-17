const mongoose = require('mongoose');

// Define the property schema
const propertySchema = new mongoose.Schema({
    ownerName: {
        type: String,    
    },
    mobileNumbers:
    {
        type: Number,
        
    }
    ,
    emailAddresses:
    {
        type: String,
        
    }
    ,
    //propertyBasics: {
        villaApartmentNumber: {
            type: String,
            
        },
        projectName: {
            type: String,
            
        },
        location: {
            type: String,
            
        },
        yearOfCompletion: {
            type: Number,
           
        },
    //propertyPricing: {
        expectedRentPrice: {
            type: String,
            
        },
        expectedSalePrice: {
            type: String,
            
        },
        monthlyMaintenance: {
            type: String,
            
        },
        builtUpArea: {
            type: String,
           
        }
        , plotSize: {
            type: String,
            
        },
        propertyImgName: {
            type: String,
            
        },
    //propertyOverview: {
        bedrooms: {
            type: Number,
            
        },
        bathrooms: {
            type: Number,
            
        },
        balconies: {
            type: Number,
            
        },
        carParks: {
            type: Number,
           
        },
        mainDoorDirection: {
            type: String,
            
        },
   // propertyFeatures: {
        studyRoom: {
            type: String
        },
        maidsRoom: {
            type: String
        },
        maidsToilet: {
            type: String
        },
        privatePool: {
            type: String
        },
        privateGarden: {
            type: String
        },
        privateTerrace: {
            type: String
        },
        homeTheatreRoom: {
            type: String
        },
        mediaRoom: {
            type: String
        },
        modularKitchen: {
            type: String
        }
    ,
    // furnishingDetails: {
        airConditioner: {
            type: String
        },
        bed: {
            type: String
        },
        chimney: {
            type: String
        },
        curtains: {
            type: String
        },
        diningTable: {
            type: String
        },
        dishwasher: {
            type: String
        },
        dryer: {
            type: String
        },
        geyser: {
            type: String
        },
        hob: {
            type: String
        },
        mattress: {
            type: String
        },
        microwave: {
            type: String
        },
        oven: {
            type: String
        },
        refrigerator: {
            type: String
        },
        sofaSet: {
            type: String
        },
        solarHeater: {
            type: String
        },
        tv: {
            type: String
        },
        wardrobe: {
            type: String
        },
        washingMachine: {
            type: String
        },
        waterPurifier: {
            type: String
        }
    ,
    // flooringType: {
        granite: {
            type: String
        },
        italianMarble: {
            type: String
        },
        kotaStone: {
            type: String
        },
        marble: {
            type: String
        },
        tiles: {
            type: String
        },
        wood: {
            type: String
        },

    
    additionalInformation: {
        type: String
    }
});

// Create the Property model
const Property = mongoose.model('Property', propertySchema);

module.exports = Property;

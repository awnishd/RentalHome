const mongoose = require('mongoose');

// Define the schema for the property
const plotSchema = new mongoose.Schema({
  ownerName: {
    type: String,
    required: true
  },
  mobileNumbers: {
    type: String,
    required: true
  },
  emailAddresses: {
    type: String,
    required: true
  },
  //propertyBasics: {
    plotNumber: {
      type: String,
      
    },
    projectName: {
      type: String,
      
    },
    location: {
      type: String,
      
    },
    propertyImgName :{
      type: String,

    },
    direction: {
      type: String,
     
    }
  ,
  //propertyPricing: {
    expectedSalePrice: {
      type: Number,
      
    },
    plotSize: {
      type: Number,
      
    },
    plotDimensions: {
      type: String,
      
    },
    khataType: {
      type: String,
      
    },
    additionalInformation: {
      type: String
    }
  
});

// Create and export the Plot model
const Plot = mongoose.model('Plot', plotSchema);

module.exports = Plot;

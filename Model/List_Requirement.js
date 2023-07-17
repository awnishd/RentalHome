const mongoose = require('mongoose');

// Define the schema for the form document
const requirementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true
  },
  requirements: {
    type: String,
    required: true
  }
});

// Create a model from the schema
const Requirement = mongoose.model('Requirement', requirementSchema );

module.exports = Requirement;

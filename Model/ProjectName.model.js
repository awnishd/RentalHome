const mongoose = require('mongoose');

// Define the property schema
const projectSchema = new mongoose.Schema({
   projectName: {
      type: String
   },
   allProperty: []
});

// Create the Property model
const Project = mongoose.model('project', projectSchema);

module.exports = Project;

const mongoose = require('mongoose');

const projectDetailSchema = new mongoose.Schema({
  projectName: {
    type: String,
  },
  projectImg :{
    type:String,
  },
  projectGroup:{
    type:String,
  },
  projectLocation :{
    type:String,
  },
  mapLink:{
    type:String,
  },
  startDate:{
    type:String,

  },
  status:{
    type:String,

  },
  totalApartment:{
    type:String,

  },
  launchDate:{
    type:String, 

  },
  availability:{
    type:String,

  },
  oneBHK: [],
  oneFiveBHK: [],
  twoFiveBHK: [],
  twoBHK: [],   // Changed from 2BHK to twoBHK
  threeBHK: [],
  
  threeFiveBHK:[],
  fourBHK: [],  // Changed from 4BHK to fourBHK
});

const ProjectDetail = mongoose.model('ProjectDetail', projectDetailSchema);

module.exports = ProjectDetail;

const mongoose = require('mongoose');
const express = require('express');


const router = express.Router();
const AdminProperty = mongoose.model('AdminProperty');


router.post('/listProperty', (req, res) => {

  const { ownerName, mobileNumbers, emailAddresses, villaApartmentNumber, projectName,builderName, location, yearOfCompletion,imgUrl, expectedRentPrice, expectedSalePrice, monthlyMaintenance, builtUpArea,carpetArea, plotSize,propertyImgName, bedrooms, bathrooms, balconies, carParks,latitude,longitude, mainDoorDirection, studyRoom, maidsRoom, maidsToilet, privatePool, privateGarden, privateTerrace, homeTheatreRoom, mediaRoom, modularKitchen, airConditioner, bed, chimney, curtains, diningTable, dishwasher, dryer, geyser, hob, mattress, microwave, oven, refrigerator, sofaSet, solarHeater, tv, wardrobe, washingMachine, waterPurifier, granite, italianMarble, kotaStone, marble, tiles, wood, additionalInformation } = req.body;


  const property = new AdminProperty({ ownerName, mobileNumbers, emailAddresses, villaApartmentNumber, projectName,builderName, location, yearOfCompletion,imgUrl, expectedRentPrice, expectedSalePrice, monthlyMaintenance, builtUpArea,carpetArea, plotSize,propertyImgName,bedrooms, latitude,longitude,  bathrooms, balconies, carParks, mainDoorDirection, studyRoom, maidsRoom, maidsToilet, privatePool, privateGarden, privateTerrace, homeTheatreRoom, mediaRoom, modularKitchen, airConditioner, bed, chimney, curtains, diningTable, dishwasher, dryer, geyser, hob, mattress, microwave, oven, refrigerator, sofaSet, solarHeater, tv, wardrobe, washingMachine, waterPurifier, granite, italianMarble, kotaStone, marble, tiles, wood, additionalInformation });

  property.save()
    .then((newData) => {
      res.status(201).json({ result: "Data listed successfully" })
    })
    .catch((error) => {
      console.log(error)
      return res.status(400).json({ error: "Data not added" })
    })
})



router.get('/getAllProjects', async (req, res) => {
  try {
    const allProject = await AdminProperty.find({}, 'projectName');
    const uniqueProjects = [];
    const projectNames = [];

    for (let i = 0; i < allProject.length; i++) {
      const projectName = allProject[i].projectName;

      if (!projectNames.includes(projectName)) {
        uniqueProjects.push(allProject[i]);
        projectNames.push(projectName);
      }
    }
    // If there are errors, return Bad request and the errors
    //console.log(allProject)
    res.json(uniqueProjects)

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})


router.get('/getAllBuilder', async (req, res) => {
  try {
    const allBuilder = await AdminProperty.find({}, 'builderName');
    const uniqueBuilders = [];
    const BuilderNames = [];

    for (let i = 0; i < allBuilder.length; i++) {
      const builderName = allBuilder[i].builderName;

      if (!BuilderNames.includes(builderName)) {
        uniqueBuilders.push(allBuilder[i]);
        BuilderNames.push(builderName);
      }
    }
    // If there are errors, return Bad request and the errors
    //console.log(allProject)
    res.json(uniqueBuilders)

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})

router.get('/getAllProjectByBuilder/:builderId', async (req, res) => {
  try {
    const {builderId}=req.params;
    const project = await AdminProperty.find({_id: builderId });

    const Projects = await AdminProperty.find({builderName : project[0].builderName})

    
    const uniqueProjects = [];
    const projectNames = [];

    for (let i = 0; i < Projects.length; i++) {
      const projectName = Projects[i].projectName;

      if (!projectNames.includes(projectName)) {
        uniqueProjects.push(Projects[i]);
        projectNames.push(projectName);
      }
    }


    res.json(uniqueProjects);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});




router.get('/getAllProjectByBuilders/:builderId', async (req, res) => {
  try {
    const { builderId } = req.params;
    const project = await AdminProperty.find({ _id: builderId });

    const Projects = await AdminProperty.find({ builderName: project[0].builderName });

    const uniqueProjects = [];
    const projectNames = [];

    for (let i = 0; i < Projects.length; i++) {
      const { _id, projectName } = Projects[i]; // Destructure the required fields

      if (!projectNames.includes(projectName)) {
        uniqueProjects.push({ _id, projectName }); // Construct a new object with only the required fields
        projectNames.push(projectName);
      }
    }

    res.json(uniqueProjects);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});






router.get('/getByLocation', async (req, res) => {
  try {
    const allLocation = await AdminProperty.find({}, 'location');
    const uniqueProjects = [];
    const projectNames = [];

    for (let i = 0; i < allLocation.length; i++) {
      const location = allLocation[i].location;

      if (!projectNames.includes(location)) {
        uniqueProjects.push(allLocation[i]);
        projectNames.push(location);
      }
    }
    // If there are errors, return Bad request and the errors
    //console.log(allProject)
    res.json(uniqueProjects)

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})




router.get('/getPropertiesByProject/:projectId', async (req, res) => {
  try {
    const {projectId}=req.params;
    const project = await AdminProperty.find({_id: projectId });

    const properties = await AdminProperty.find({projectName : project[0].projectName})


    res.json(properties);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});



router.get('/getPropertiesByLocation/:locationId', async (req, res) => {
  try {
    const {locationId}=req.params;
    const project = await AdminProperty.find({_id: locationId });

    const properties = await AdminProperty.find({location : project[0].location})


    res.json(properties);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});




router.get('/propertyDetails/:propertyId', async (req, res) => {
  try {
    const { propertyId } = req.params;
    //console.log(propertyId);
    const property = await AdminProperty.findOne({ _id: propertyId });
    //console.log(propertyId);

    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    res.json(property);
  }
  catch (error) {
    //console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
})

module.exports = router;
const mongoose = require('mongoose');
const express = require('express');


const router = express.Router();
const Property = mongoose.model('Property');


router.post('/propertySignup', (req, res) => {

  const { ownerName, mobileNumbers, emailAddresses, villaApartmentNumber, projectName, location, yearOfCompletion, expectedRentPrice, expectedSalePrice, monthlyMaintenance, builtUpArea, plotSize,propertyImgName, bedrooms, bathrooms, balconies, carParks, mainDoorDirection, studyRoom, maidsRoom, maidsToilet, privatePool, privateGarden, privateTerrace, homeTheatreRoom, mediaRoom, modularKitchen, airConditioner, bed, chimney, curtains, diningTable, dishwasher, dryer, geyser, hob, mattress, microwave, oven, refrigerator, sofaSet, solarHeater, tv, wardrobe, washingMachine, waterPurifier, granite, italianMarble, kotaStone, marble, tiles, wood, additionalInformation } = req.body;


  const property = new Property({ ownerName, mobileNumbers, emailAddresses, villaApartmentNumber, projectName, location, yearOfCompletion, expectedRentPrice, expectedSalePrice, monthlyMaintenance, builtUpArea, plotSize,propertyImgName, bedrooms, bathrooms, balconies, carParks, mainDoorDirection, studyRoom, maidsRoom, maidsToilet, privatePool, privateGarden, privateTerrace, homeTheatreRoom, mediaRoom, modularKitchen, airConditioner, bed, chimney, curtains, diningTable, dishwasher, dryer, geyser, hob, mattress, microwave, oven, refrigerator, sofaSet, solarHeater, tv, wardrobe, washingMachine, waterPurifier, granite, italianMarble, kotaStone, marble, tiles, wood, additionalInformation });

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
    const allProject = await Property.find({}, 'projectName');
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

router.get('/getByLocation', async (req, res) => {
  try {
    const allLocation = await Property.find({}, 'location');
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
    const project = await Property.find({_id: projectId });

    const properties = await Property.find({projectName : project[0].projectName})


    res.json(properties);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});



router.get('/getPropertiesByLocation/:locationId', async (req, res) => {
  try {
    const {locationId}=req.params;
    const project = await Property.find({_id: locationId });

    const properties = await Property.find({location : project[0].location})


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
    const property = await Property.findOne({ _id: propertyId });
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
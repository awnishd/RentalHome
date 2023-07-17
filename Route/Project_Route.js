const mongoose = require('mongoose');
const express = require('express');


const router = express.Router();
const Project = require('../Model/ProjectName.model.js')
const Property = require('../Model/ListProperty.model.js')


router.post('/postproject',   async (req, res) => {
        try {
            const { projectName } = req.body;
            // If there are errors, return Bad request and the errors
           
            const projectData = new Project({
                projectName
            })
            const savedProject = await projectData.save()
            res.json(savedProject)
           
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
  })

  router.post('/postProperty/:projectId', async (req, res) => {
    try {
      const { projectId } = req.params;
      // If there are errors, return Bad request and the errors
  
      const {
        ownerName,
        mobileNumbers,
        emailAddresses,
        villaApartmentNumber,
        location,
        yearOfCompletion,
        expectedRentPrice,
        expectedSalePrice,
        monthlyMaintenance,
        builtUpArea,
        plotSize,
        bedrooms,
        bathrooms,
        balconies,
        carParks,
        mainDoorDirection,
        studyRoom,
        maidsRoom,
        maidsToilet,
        privatePool,
        privateGarden,
        privateTerrace,
        homeTheatreRoom,
        mediaRoom,
        modularKitchen,
        airConditioner,
        bed,
        chimney,
        curtains,
        diningTable,
        dishwasher,
        dryer,
        geyser,
        hob,
        mattress,
        microwave,
        oven,
        refrigerator,
        sofaSet,
        solarHeater,
        tv,
        wardrobe,
        washingMachine,
        waterPurifier,
        granite,
        italianMarble,
        kotaStone,
        marble,
        tiles,
        wood,
        additionalInformation
      } = req.body;
  
      const property = new Property({
        ownerName,
        mobileNumbers,
        emailAddresses,
        villaApartmentNumber,
        location,
        yearOfCompletion,
        expectedRentPrice,
        expectedSalePrice,
        monthlyMaintenance,
        builtUpArea,
        plotSize,
        bedrooms,
        bathrooms,
        balconies,
        carParks,
        mainDoorDirection,
        studyRoom,
        maidsRoom,
        maidsToilet,
        privatePool,
        privateGarden,
        privateTerrace,
        homeTheatreRoom,
        mediaRoom,
        modularKitchen,
        airConditioner,
        bed,
        chimney,
        curtains,
        diningTable,
        dishwasher,
        dryer,
        geyser,
        hob,
        mattress,
        microwave,
        oven,
        refrigerator,
        sofaSet,
        solarHeater,
        tv,
        wardrobe,
        washingMachine,
        waterPurifier,
        granite,
        italianMarble,
        kotaStone,
        marble,
        tiles,
        wood,
        additionalInformation
      });
  
      const savedProperty = await property.save();
      const propertyId = savedProperty._id;
  
      const query = { _id: projectId };
      const update = { $push: { allProperty: propertyId } };
  
      const updateProject = await Project.updateOne(query, update);
  
      res.json(updateProject);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });
  

  //[{projectName :"" , projectproperty:[]} , {projectName :"" , projectproperty:[]}]
  
router.get('/getAllProject',   async (req, res) => {
    try {
        const allProject = await Project.find({});
        // If there are errors, return Bad request and the errors
       
        res.json(allProject)
       
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
    
    
module.exports = router;
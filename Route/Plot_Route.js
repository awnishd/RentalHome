const mongoose = require('mongoose');
const express = require('express');


const router = express.Router();
const Plot = mongoose.model('Plot');


router.post('/plotSignup', (req , res) => {

    const { ownerName, mobileNumbers, emailAddresses,plotNumber, projectName ,location,propertyImgName ,direction,expectedSalePrice,plotSize,plotDimensions,khataType,additionalInformation  } = req.body;

    const plot = new Plot({ ownerName, mobileNumbers, emailAddresses,plotNumber, projectName ,location,propertyImgName ,direction,expectedSalePrice,plotSize,plotDimensions,khataType,additionalInformation  });

    plot.save()
        .then((newData) => {
            res.status(201).json({ result: "Data listed successfully"})
        })
        .catch((error) => {
            console.log(error)
            return res.status(400).json({ error: "Data not added" })
        })
    })


    router.get('/getAllPlotProjects', async (req, res) => {
        try {
          const allProject = await Plot.find({}, 'projectName');
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
      
      router.get('/getPlotByLocation', async (req, res) => {
        try {
          const allLocation = await Plot.find({}, 'location');
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
      
      
      
      
      router.get('/getPlotByProject/:projectId', async (req, res) => {
        try {
          const {projectId}=req.params;
          const project = await Plot.find({_id: projectId });
      
          const properties = await Plot.find({projectName : project[0].projectName})
      
      
          res.json(properties);
        } catch (error) {
          console.error(error.message);
          res.status(500).send("Internal Server Error");
        }
      });
      
      
      
      router.get('/getPlotByLocation/:locationId', async (req, res) => {
        try {
          const {locationId}=req.params;
          const project = await Plot.find({_id: locationId });
      
          const properties = await Plot.find({location : project[0].location})
      
      
          res.json(properties);
        } catch (error) {
          console.error(error.message);
          res.status(500).send("Internal Server Error");
        }
      });
      
      
      
      
      router.get('/plotDetails/:plotId', async (req, res) => {
        try {
          const { plotId } = req.params;
          //console.log(propertyId);
          const property = await Plot.findOne({ _id: plotId });
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
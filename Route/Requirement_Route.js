const mongoose = require('mongoose');
const express = require('express');


const router = express.Router();
const Requirement = mongoose.model('Requirement');


router.post('/requirement', (req , res) => {

    const { name, mobileNumber, emailAddress ,requirements} = req.body;


    const requires = new Requirement({ name, mobileNumber, emailAddress ,requirements});

    requires.save()
        .then((newData) => {
            res.status(201).json({ result: "Details listed successfully"})
        })
        .catch((error) => {
            //console.log(error)
            return res.status(400).json({ error: "Details not added" })
        })
    })







module.exports = router;
const express = require('express');
const router = express.Router();
const db = require("../models");

// API Routes
// ===============================================
// Adds a new meetup with a name and info fields
router.post("/api/meetup", function (req, res) {
    console.log("Adding Meetup: " + req.body.name);
    db.Meetup.create({
        name: req.body.name,
        time_info: req.body.timeInfo,
        location_info: req.body.locationInfo,
        extra_info: req.body.extraInfo,
    }).then(function (newMeetup) {
        console.log("Added Meetup: " + newMeetup.name)
        res.json(newMeetup);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            error: true,
            data: null,
            message: "Unable to create Meetup",
        });
    });
});

// Gets a meetup by its id
router.get("/api/meetup/:id", function (req, res) {
    console.log("Finding Meetup ID: " + req.params.id);
    db.Meetup.findOne({
        where: {
            id: req.params.id
        },
    }).then(function (foundMeetup) {
        console.log("Found Meetup: " + foundMeetup.name);
        res.json(foundMeetup);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            error: true,
            data: null,
            message: "Unable to find Meetup"
        });
    });
});
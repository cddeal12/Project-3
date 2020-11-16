const express = require('express');
const router = express.Router();
const db = require('../models');

// API Routes
// ==========================================

// Creates a new user-meetup association
router.post("/api/usermeetup", function(req, res) {
    db.UserMeetup.create({
        meetup_id: req.body.meetupId,
        attendee_id: req.body.attendeeId
    }).then(function(result) {
        console.log("Created a new user-meetup association");
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            error: true,
            data: null,
            message: "unable to create user-meetup association."
        });
    });
});

// finds a user-game associations using the attendee_id
router.get("/api/usermeetup/byUser", function(req, res) {
    db.UserMeetup.findAll({
        where: {
            attendee_id: req.body.attendeeId,
        },
    }).then(function(response) {
        console.log("Found associations.");
        res.json(response);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            error: true,
            data: null,
            message: "Couldn't Find association",
        });
    });
});

// finds a user-game associations using the meetup
router.get("/api/usermeetup/byUser", function(req, res) {
    db.UserMeetup.findAll({
        where: {
            meetup_id: req.body.meetupId,
        },
    }).then(function(response) {
        console.log("Found associations.");
        res.json(response);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            error: true,
            data: null,
            message: "Couldn't Find association",
        });
    });
});

module.exports = {
    router: router
};

const express = require('express');
const router = express.Router();
const db = require("../models");

// Variable that stores the current user based on who is logged in
var currentUser;

//API Routes
// ====================================
// Adds a new user, uses the given username for the name by default
router.post("/api/user", function (req, res) {
    console.log("Creating User: " + req.body.username);
    db.User.create({
        user_name: req.body.username,
        password: req.body.password,
        name: req.body.username,
    }).then(function (newUser) {
        currentUser = newUser;
        res.json(newUser);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            error: true,
            data: null,
            message: "Unable to create User",
        });
    });
});

// Sets currentUser to the user selected by id, used on login
router.get("/api/user/:id", function (req, res) {
  db.User.findOne({
      where: {
          id: req.params.id,
      },
  }).then(function (foundUser) {
    res.json(foundUser);
    currentUser = foundUser;
  }).catch((err) => {
    console.log(err);
    res.status(500).json({
        error: true,
        data: null,
        message: "Unable to find user"
    });
  });
});

module.exports = {
    router: router,
    currentUser: currentUser,
};
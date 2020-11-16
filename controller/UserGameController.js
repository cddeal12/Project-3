const express = require('express');
const router = express.Router();
const db = require("../models");

//API Routes
// ===============================================

// Creates a new user-game association
router.post("/api/usergame", function(req,res) {
    db.UserGame.create({
        user_id: req.body.userId,
        game_id: req.body.gameId
    }).then(function(result) {
        console.log("Created new association");
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            error: true,
            data: null,
            message: "Unable to create user-game association.",
        });
    })
});

// finds all user-game associations using the user_id
router.get("/api/usergame/byUser/:id", function(req, res) {
    db.UserGame.findAll({
        where: {
            user_id: req.params.id
        },
    }).then((response) => {
        console.log("Found associations.");
        res.json(response);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            error: true,
            data: null,
            message: "Couldn't Find associations",
        });
    });
});

// finds a user-game associations using the user_id AND the game_id
router.get("/api/usergame", function(req, res) {
    db.UserGame.findAll({
        where: {
            user_id: req.body.userId,
            game_id: req.body.gameId,
        },
    }).then(function(response) {
        console.log("Found association.");
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

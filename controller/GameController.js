const express = require('express');
const router = express.Router();
const db = require("../models");

// API Routes
// ==================================================
// Adds a new game with a title and bgg_id
router.post("/api/game", function (req, res) {
    console.log("Adding Game: " + req.body.title);
    db.Game.create({
        title: req.body.title,
        bgg_id: req.body.bggId,
        thumbnail: req.body.imageString
    }).then(function (newGame) {
        console.log("Added Game: " + newGame.title)
        res.json(newGame);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            error: true,
            data: null,
            message: "Unable to create Game",
        });
    });
});

// Gets a game by its bgg_id
router.get("/api/game/:bggId", function (req, res) {
    console.log("Searching for game with the BGG_ID of: " + req.params.bggId);
    db.Game.findOne({
        where: {
            bgg_id: req.params.bgg_id,
        },
    }).then(function (foundGame) {
        console.log("Found Game: " + foundGame.title);
        res.json(foundGame);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            error: true,
            data: null,
            message: "Unable to find Game",
        });
    });
});

// Gets a game by its id in the database
router.get("/api/game/byId/:id", function(req, res) {
    console.log("Searching for game with id of: " + req.params.id);
    db.Game.findOne({
        where: {
            id: req.params.id
        },
    }).then(function(foundGame) {
        console.log("Found game: " + foundGame.title);
        res.json(foundGame);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            error: true,
            data: null,
            message: "Unable to find game with that id",
        });
    });
});

module.exports = {
    router: router
  };

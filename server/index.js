const path = require('path');
const express = require('express');
const app = express();
const db = require('../models');
const bodyParser = require('body-parser');
// const Sequelize = require('sequelize');

// Controller Routes import
const {router: userRouter} = require('../controller/UserController');
const {router: gameRouter} = require('../controller/GameController');
const {router: meetupRouter} = require('../controller/MeetupController');
const {router: userGameRouter} = require('../controller/UserGameController');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'build');
console.log("Public Path: " + publicPath);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(publicPath));

// API Routes setup
app.use(userRouter);
app.use(gameRouter);
app.use(meetupRouter);
app.use(userGameRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

db.sequelize.sync({}).then(function () {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}.`)
    });
});
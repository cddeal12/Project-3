const path = require('path');
const express = require('express');
const app = express();
const db = require('../models');
// const Sequelize = require('sequelize');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'build');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

db.sequelize.sync({}).then(function () {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}.`)
    });
});
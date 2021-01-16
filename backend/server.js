const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const BodyParser = require("body-parser");

const connectDb = require('./database');




const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});
//Set up return json format
app.use(BodyParser.json()); // converts body into json
app.use(BodyParser.urlencoded({ extended: false })); // exclude extra details
app.use(cors());
// Set up web 
app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

//Connect Database
connectDb();
//Import Routes
const gameRoute = require('./api/routes/Game');
const users = require('./api/routes/User.js');
// API---
app.use('/api/game', gameRoute);
app.use('/api/users', users);

process.on('SIGILL', error => {
    console.error(error);
});

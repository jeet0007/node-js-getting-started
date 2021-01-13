const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const BodyParser = require("body-parser");

const connectDb = require('./database');




const PORT = process.env.PORT || 5000
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
const userRoute = require('./api/routes/User');
const gameRoute = require('./api/routes/Game');
// API---
app.use('/api/user', userRoute);
app.use('/api/game', gameRoute);

process.on('SIGILL', error => {
    console.error(error);
});

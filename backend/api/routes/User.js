const express = require('express');
const mongoose = require('mongoose');

const User = require('../models/User');
const route = express.Router();



route.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.json({ message: error })
    }
});

route.post('/', async (req, res) => {
    const { firstname, lastname, email } = req.body;
    let user = {}
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    let userModel = new User(user);
    try {
        const newPost = await userModel.save()
        res.json(newPost);
    } catch (error) {
        res.json({ message: error })
    }

});



module.exports = route
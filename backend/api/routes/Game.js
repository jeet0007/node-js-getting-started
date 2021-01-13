const express = require('express');
const mongoose = require('mongoose');

const Game = require('../models/Game');
const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const games = await Game.find()
        res.json(games)
    } catch (error) {
        res.json({ message: error })
    }
});

route.post('/', async (req, res) => {
    const { name, launchDate, url, supports, images } = req.body;
    const game = {};
    game.name = name;
    game.launchDate = launchDate;
    game.url = url;
    game.supports = supports;
    game.images = images;
    try {
        const gamePost = await game.save();
        res.json(gamePost)
    } catch (err) {
        res.json({ message: err })
    }
});

// Get specific game
route.get('/:gameId', async (req, res) => {
    const gameid = req.params.gameid;
    try {
        const game = await Game.findById(gameid);
        res.json(game);
    } catch (err) {
        res.json({ message: err })
    }
})
//delete specific game
route.delete('/:gameId', async (req, res) => {
    try {
        const deletedGame = await Game.remove({ _id: req.params.gameid })
        res.json(deletedGame);
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = route
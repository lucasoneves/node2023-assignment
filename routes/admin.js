const express = require("express");
const path = require('path');
const { postAddPlayer, getAddPlayers }= require('../controllers/players');
const router = express.Router();

router.post('/add-player', postAddPlayer)

router.get('/add-player', getAddPlayers)

module.exports = router;

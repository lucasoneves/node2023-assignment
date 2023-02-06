const express = require("express");
const path = require('path');
const playerController = require('../controllers/players');
const router = express.Router();

router.get('/add-player', playerController.getAddPlayers)
router.post('/add-player', playerController.postAddPlayer)


module.exports = router;

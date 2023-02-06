const express = require("express");

const router = express.Router();

const playerController = require('../controllers/players');

router.get('/add-player', playerController.getAddPlayers)
router.post('/add-player', playerController.postAddPlayer)
router.get('/players', playerController.getPlayers);
router.get('/', playerController.getPlayers);

module.exports = router;

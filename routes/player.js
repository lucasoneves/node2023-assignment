const express = require("express");

const router = express.Router();

const playerController = require('../controllers/players');

router.get('/', playerController.getPlayers);
router.get('/add-player', playerController.getAddPlayers)
router.post('/add-player', playerController.postAddPlayer)
router.get('/players', playerController.getPlayers);
router.get('/players/:playerId', playerController.getPlayerDetail);

module.exports = router;

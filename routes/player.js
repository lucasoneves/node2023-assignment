const express = require("express");

const router = express.Router();

const playerController = require('../controllers/players');

router.get('/', playerController.getPlayers);
router.get('/players', playerController.getPlayers);

module.exports = router;

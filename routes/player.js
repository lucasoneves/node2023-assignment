const express = require("express");

const router = express.Router();

const playerController = require('../controllers/players');

router.get("/add-player", (req, res, next) => {
  res.render('add-players')
});

router.post('/add-player', (req, res, next) => {
  playerController.addPlayer(req.body.playerName)
  res.redirect("/");
})

module.exports = router;

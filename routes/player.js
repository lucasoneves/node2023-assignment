const express = require("express");

const router = express.Router();

router.get("/add-player", (req, res, next) => {
  res.render('add-players')
});

router.post('/add-player', (req, res, next) => {
  console.log('Player: ' + req.body.playerName)
  res.redirect("/");
})

module.exports = router;

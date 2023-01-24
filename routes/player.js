const express = require("express");

const router = express.Router();

router.get("/add-player", (req, res, next) => {
  res.send(`<form method="POST" action="players">
        <input type="text" name="playerName" placeholder="Player name"></input>
        <button type="submit">Save player</button>
    </form>`);
});

module.exports = router;

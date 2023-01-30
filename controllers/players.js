const Player = require('../models/player');

exports.getPlayers = (req, res, next) => {
    const players = Player.fetchAll();
    res.render('index', {
        players: players, 
        pageTitle: "Players",
        path: "/players",
        hasProducts: players.length > 0
    })
}

exports.addPlayer = (req, res, next) => {
    const player = new Player(req)
    player.save()
}
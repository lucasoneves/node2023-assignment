const Player = require('../models/player');

exports.getPlayers = (req, res, next) => {
    const players = Player.fetchAll();
    res.render('index', {
        players: players, 
        pageTitle: "Players",
        path: "/players",
        hasPlayers: players.length > 0
    })
}

exports.postAddPlayer = (req, res, next) => {
    const player = new Player(req.body.playerName, req.body.urlImage);
    player.save();
    res.redirect('/');
}

exports.getAddPlayers = (req, res, next) => {
    res.render('add-players', { pageTitle: 'Add Player', path: '/add-player'})
}
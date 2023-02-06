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
    const playerName = req.body.playerName;
    const imageUrl = req.body.urlImage;
    const player = new Player(playerName, imageUrl);
    player.save();
    res.redirect('/');
}

exports.getAddPlayers = (req, res, next) => {
    res.render('add-players', { pageTitle: 'Add Player', path: '/add-player'})
}
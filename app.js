const express = require("express");

const app = express();

const bodyParser = require('body-parser');

const users = [];

app.set('view engine', 'pug')
app.set('views', 'views');

app.use(express.urlencoded({ extended: true}))

app.get("/", (req, res, next) => {
    res.render('index', { pageTitle: 'Add user'});
});

app.get("/users", (req, res, next) => {
    console.log(users)
    res.render('users', { pageTitle: 'Users', users });
});

app.post('/add-user', (req, res, next) => {
    users.push({ name: req.body.username});
    res.redirect('/users');
});

app.listen(3000);

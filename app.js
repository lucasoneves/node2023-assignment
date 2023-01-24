const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require('./routes/admin');
const playerRoutes = require('./routes/player');

const app = express();

app.listen(3000);

app.use(bodyParser.urlencoded({ extended: false })); // https://www.youtube.com/watch?v=P1OI_EKyl6U


app.use(adminRoutes);

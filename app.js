const express = require("express");
const bodyParser = require("body-parser");
const path = require('path')

const adminRoutes = require("./routes/admin");
const playerRoutes = require("./routes/player");

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.listen(3000);
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false })); // https://www.youtube.com/watch?v=P1OI_EKyl6U
app.use(adminRoutes);
app.use(playerRoutes);

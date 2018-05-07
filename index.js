const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

const PORT = process.env.PORT || 5000;
app.listen(PORT);

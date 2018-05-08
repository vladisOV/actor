const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const bodyParser = require("body-parser");
const passport = require("passport");
const keys = require("./config/keys");
const cookieParser = require("cookie-parser");
const session = require("cookie-session");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ keys: ["secret"] }));

app.use(passport.initialize());
app.use(passport.session());

require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

require("./routes/authRoutes")(app);
require("./routes/userRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

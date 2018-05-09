const passport = require("passport");
const User = require("../models/User");

module.exports = app => {
  app.post("/api/register", (req, res, next) => {
    console.log("registering user", req.body);
    User.register(
      new User({ username: req.body.username }),
      req.body.password,
      err => {
        if (err) {
          console.log("error while user register!", err);
          return next(err);
        }
        console.log("user registered!");
        res.redirect("/");
      }
    );
  });

  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.send(req.user);
    // res.redirect("/dashboard");
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};

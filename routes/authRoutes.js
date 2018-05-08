const passport = require("passport");
const User = require("../models/User");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send({ user: req.user });
  });

  app.get("/register", (req, res) => {
    // res.render("register", {});
  });

  app.post("/register", (req, res, next) => {
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

  app.get("/login", (req, res) => {
    res.send({ user: req.user });
  });

  app.post("/login", passport.authenticate("local"), (req, res) => {
    res.redirect("/");
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};

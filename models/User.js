const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = mongoose.Schema({
  first: String,
  last: String,
  email: String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("users", userSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = mongoose.Schema(
  {
    first: { type: String },
    last: { type: String },
    phone: {
      type: String,
      lowercase: true,
      trim: true,
      index: true,
      unique: true,
      sparse: true, //sparse is because now we have two possible unique keys that are optional
      validate: [
        validate({
          validator: "isNumeric",
          arguments: [7, 20],
          message: "Not a valid phone number."
        })
      ]
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      index: true,
      unique: true,
      sparse: true,
      validate: [
        validate({
          validator: "isEmail",
          message: "Not a valid email."
        })
      ]
    },
    password: { type: String }
  },
  { timestamps: true }
);

mongoose.model("users", userSchema);

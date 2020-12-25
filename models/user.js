const mongoose = require("mongoose");
// schema prototype provided by Mongoose
const Schema = mongoose.Schema;

// specify requirements for new instance
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

// "User" = name of this model
// userSchema = the actual schema DB must follow
// "users" = the collection of users created (very similar to rows)
module.exports = mongoose.model("User", userSchema, "users");

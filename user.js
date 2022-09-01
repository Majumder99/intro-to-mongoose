const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// user collection in mongodb
module.exports = mongoose.model("User", userSchema);

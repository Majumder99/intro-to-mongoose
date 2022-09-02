const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 100,
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} is not an even number`,
    },
  },
  email: {
    type: String,
    minLenght: 10,
    maxLength: 100,
    required: true,
    lowercase: true, //for use lowercase for every character automatically, we can use uppercase also
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
    // default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  hobbies: [String],
  address: addressSchema,
});

// user collection in mongodb
module.exports = mongoose.model("User", userSchema);

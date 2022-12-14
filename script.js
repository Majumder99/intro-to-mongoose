const mongoose = require("mongoose");
const User = require("./user");
mongoose.connect(
  "mongodb+srv://root:root@cluster0.yizcs.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected");
    }
  }
);

// const user = new User({ name: "Majumder", age: 33 });
// user.save().then(() => {
//   console.log("user saved");
// });

// const run = async () => {
//   const user = await User.create({ name: "mahim", age: 23 });
//   // const user = new User({ name: "Majumder", age: 33 });
//   // await user.save().then(() => {
//   //   console.log("user saved");
//   // });
//   user.name = "zafrul";
//   await user.save();
//   console.log(user);
// };

// run();

///for new schema

// name: String,
//   age: Number,
//   email: String,
//   createdAt: Date,
//   updatedAt: Date,
//   bestFriend: mongoose.SchemaTypes.ObjectId,
//   hobbies: [String],
//   address: {
//     street: String,
//     city: String,
//   },

const newRun = async () => {
  try {
    // const user = await User.create({
    //   name: "Mirajul",
    //   age: 20,
    //   email: "MajumderJJ@gmail.com",
    //   hobbies: ["fishing", "eating"],
    //   address: {
    //     street: "savar",
    //     city: "dhaka",
    //   },
    // });
    // console.log(user);
    // const user = await User.findById("6311b26839350d4c4db03b1a");
    // const users = await User.find({ name: "Mirajul" });
    const users = await User.where("name").equals("Mirajul");
    const user = await User.where("age")
      .gt("12")
      .lt("21")
      .where("name")
      .equals("Mirajul")
      .populate("bestFriend")
      .limit(1);
    // user[0].bestFriend = "6311b26839350d4c4db03b1a";
    // await user[0].save();
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
};

newRun();

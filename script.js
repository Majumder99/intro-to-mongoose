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

const user = new User({ name: "Sourav", age: 30 });
user.save().then(() => {
  console.log("user saved");
});

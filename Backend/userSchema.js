const  mongoose  = require("mongoose");


const userSchema = new mongoose.Schema({
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    img: {
      type: String,
      default: "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp",
    },
  });
  
  const User = mongoose.model("User", userSchema);

  module.exports = User
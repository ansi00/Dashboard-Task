const  User  = require("./userSchema.js");
const { hashPassword, comparePassword } = require("./authHelper.js");
const jwt = require("jsonwebtoken");


// Register Endpoint
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if name was entered
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    // check if password is good
    if (!password || password.length < 6) {
      return res.json({
        error:
          "password is required and  it should be atleast 6 characters long",
      });
    }
    // check email
    if (!email) {
      return res.json({
        error: "email is required",
      });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email already exists",
      });
    }

    const existingName = await User.findOne({ name });
    if (existingName) {
      return res.json({
        error: "User already exists",
      });
    }

    const hashedPassword = await hashPassword(password);
    // create user in database

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// Login Endpoint

const loginUser = async (req, res) => {
  try {
    const { name, password } = req.body;

    // check if user exist
    const user = await User.findOne({ name });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }

    // check if password match
    const match = await comparePassword(password, user.password);

    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) {
            console.log("inside func");
            console.error("Error generating JWT:", err);
            return res.status(500).json({ error: "Internal Server Error" });
          }

          res.cookie("token", token).json(user);
        }
      );
    }

    if (!match) {
      return res.json({
        error: "wrong password! Try Again",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    registerUser,
    loginUser
}
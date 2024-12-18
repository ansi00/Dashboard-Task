const express = require("express");
const router = express.Router();
const cors = require("cors");

const { registerUser, loginUser } = require("./authControllers.js");

// middlewares

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;

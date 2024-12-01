const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const port = 3001;

// Enable CORS
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
// configuring dotenv
dotenv.config();
app.use(express.json());
app.use("/", require("./authRoutes.js"));
app.use(express.urlencoded({ extended: false }));

const DBConn = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/Dashboard");
};



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  DBConn()
    .then(console.log("Connected DB"))
    .catch((err) => {
      console.log(err);
    });
});



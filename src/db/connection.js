const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); //always called the same thing so can write themc onsistently and read it.
    console.log("successfully connected");
  } catch (error) {
    console.log(error);
  }
};

connection();

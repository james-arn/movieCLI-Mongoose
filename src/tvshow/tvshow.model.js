//*STRETCH GOAL - TV SHOW SCHEMA
const mongoose = require("mongoose");

const tvSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  genre: { type: String },
  rating: { type: Number },
});

const TVShow = mongoose.model("TV Show", tvSchema);

module.exports = TVShow;

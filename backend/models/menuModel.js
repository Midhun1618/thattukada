// models/menuModel.js
const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  availability: Boolean,
  image: String,
});

// 👇 This tells mongoose to use the "menu" collection
module.exports = mongoose.model("Menu", foodItemSchema);

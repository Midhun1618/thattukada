const express = require("express");
const router = express.Router();
const Example = require("../models/menuModel");

router.get("/", async (req, res) => {
  const data = await Example.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  const newItem = new Example({ name: req.body.name });
  const savedItem = await newItem.save();
  res.status(201).json(savedItem);
});

module.exports = router;


const express = require("express");
const router = express.Router();
const MenuItem = require("../models/menuModel");

// GET all menu items
router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch menu", error });
  }
});

// POST a new menu item
router.post("/", async (req, res) => {
  try {
    const { name, price, availability, image } = req.body;
    const newItem = new MenuItem({ name, price, availability, image });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: "Failed to add item", error });
  }
});

// PUT: update an existing menu item by ID
router.put("/:id", async (req, res) => {
  const { name, price, availability, image, status } = req.body;

  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      {
        name,
        price,
        availability,
        image,
        status,
      },
      { new: true } // return the updated doc
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
     
    }

    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ message: "Error updating item", error: err });
    console.error(err);
  }
});


module.exports = router;

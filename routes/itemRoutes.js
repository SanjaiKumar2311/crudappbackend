const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// CREATE
router.post("/", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const saved = await newItem.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

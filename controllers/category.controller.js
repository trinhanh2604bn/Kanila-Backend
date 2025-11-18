const Category = require("../models/category.model");

// Get all
const getCategories = async (req, res) => {
  try {
    const data = await Category.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one
const getCategory = async (req, res) => {
  try {
    const data = await Category.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Category not found" });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create
const createCategory = async (req, res) => {
  try {
    const newData = new Category(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
const updateCategory = async (req, res) => {
  try {
    const data = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!data) return res.status(404).json({ message: "Category not found" });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
const deleteCategory = async (req, res) => {
  try {
    const data = await Category.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ message: "Category not found" });

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};

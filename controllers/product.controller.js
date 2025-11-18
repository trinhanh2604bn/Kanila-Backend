const Product = require("../models/product.model")

// Get all
const getProducts = async (req, res) => {
  try {
    const data = await Product.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one
const getProduct = async (req, res) => {
  try {
    const data = await Product.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create
const createProduct = async (req, res) => {
  try {
    const newData = new Product(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
const updatedProduct = async (req, res) => {
  try {
    const data = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!data) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
const deleteProduct = async (req, res) => {
  try {
    const data = await Product.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updatedProduct,
  deleteProduct,
};
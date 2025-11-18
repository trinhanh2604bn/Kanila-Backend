const Brand = require("../models/brand.model");

// Get all
const getBrands = async (req, res) => {
  try {
    const data = await Brand.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one
const getBrand = async (req, res) => {
  try {
    const data = await Brand.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Brand not found" });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create
const createBrand = async (req, res) => {
  try {
    const newData = new Brand(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
const updateBrand = async (req, res) => {
  try {
    const data = await Brand.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!data) return res.status(404).json({ message: "Brand not found" });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
const deleteBrand = async (req, res) => {
  try {
    const data = await Brand.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ message: "Brand not found" });
    res.status(200).json({ message: "Brand deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getBrands,
  getBrand,
  createBrand,
  updateBrand,
  deleteBrand,
};

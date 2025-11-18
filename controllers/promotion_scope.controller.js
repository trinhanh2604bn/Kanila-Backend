const PromotionScope = require("../models/promotion_scope.model");

// Get all
const getPromotionScopes = async (req, res) => {
  try {
    const data = await PromotionScope.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one
const getPromotionScope = async (req, res) => {
  try {
    const data = await PromotionScope.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Promotion scope not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create
const createPromotionScope = async (req, res) => {
  try {
    const newData = new PromotionScope(req.body);
    await newData.save();

    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
const updatePromotionScope = async (req, res) => {
  try {
    const data = await PromotionScope.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!data) return res.status(404).json({ message: "Promotion scope not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
const deletePromotionScope = async (req, res) => {
  try {
    const data = await PromotionScope.findByIdAndDelete(req.params.id);

    if (!data) return res.status(404).json({ message: "Promotion scope not found" });

    res.status(200).json({ message: "Promotion scope deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getPromotionScopes,
  getPromotionScope,
  createPromotionScope,
  updatePromotionScope,
  deletePromotionScope,
};

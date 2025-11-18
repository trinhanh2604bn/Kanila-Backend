const LoyaltyTier = require("../models/loyalty_tier.model");

// Get all
const getLoyaltyTiers = async (req, res) => {
  try {
    const data = await LoyaltyTier.find().sort({ minSpendRequired: 1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one
const getLoyaltyTier = async (req, res) => {
  try {
    const data = await LoyaltyTier.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Loyalty tier not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create
const createLoyaltyTier = async (req, res) => {
  try {
    const newData = new LoyaltyTier(req.body);
    await newData.save();

    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
const updateLoyaltyTier = async (req, res) => {
  try {
    const data = await LoyaltyTier.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!data) return res.status(404).json({ message: "Loyalty tier not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
const deleteLoyaltyTier = async (req, res) => {
  try {
    const data = await LoyaltyTier.findByIdAndDelete(req.params.id);

    if (!data) return res.status(404).json({ message: "Loyalty tier not found" });

    res.status(200).json({ message: "Loyalty tier deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getLoyaltyTiers,
  getLoyaltyTier,
  createLoyaltyTier,
  updateLoyaltyTier,
  deleteLoyaltyTier,
};

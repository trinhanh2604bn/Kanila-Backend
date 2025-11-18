const Promotion = require("../models/promotion.model");

// Get all promotions
const getPromotions = async (req, res) => {
  try {
    const data = await Promotion.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one promotion
const getPromotion = async (req, res) => {
  try {
    const data = await Promotion.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Promotion not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create promotion
const createPromotion = async (req, res) => {
  try {
    const {
      startDate,
      endDate
    } = req.body;

    if (new Date(startDate) > new Date(endDate)) {
      return res.status(400).json({ message: "start_date must be before end_date" });
    }

    const newData = new Promotion(req.body);
    await newData.save();

    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update promotion
const updatePromotion = async (req, res) => {
  try {
    if (req.body.startDate && req.body.endDate) {
      if (new Date(req.body.startDate) > new Date(req.body.endDate)) {
        return res.status(400).json({ message: "start_date must be before end_date" });
      }
    }

    const data = await Promotion.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!data) return res.status(404).json({ message: "Promotion not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete promotion
const deletePromotion = async (req, res) => {
  try {
    const data = await Promotion.findByIdAndDelete(req.params.id);

    if (!data) return res.status(404).json({ message: "Promotion not found" });

    res.status(200).json({ message: "Promotion deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getPromotions,
  getPromotion,
  createPromotion,
  updatePromotion,
  deletePromotion,
};

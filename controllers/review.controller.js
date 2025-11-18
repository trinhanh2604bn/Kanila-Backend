const Review = require("../models/review.model");

// Get all reviews
const getReviews = async (req, res) => {
  try {
    const data = await Review.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get reviews by product
const getReviewsByProduct = async (req, res) => {
  try {
    const data = await Review.find({ productId: req.params.productId })
      .sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one review
const getReview = async (req, res) => {
  try {
    const data = await Review.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Review not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create
const createReview = async (req, res) => {
  try {
    const newData = new Review(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
const updateReview = async (req, res) => {
  try {
    const data = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!data) return res.status(404).json({ message: "Review not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
const deleteReview = async (req, res) => {
  try {
    const data = await Review.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ message: "Review not found" });

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getReviews,
  getReview,
  getReviewsByProduct,
  createReview,
  updateReview,
  deleteReview,
};

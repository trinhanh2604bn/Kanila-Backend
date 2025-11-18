const ReviewImage = require("../models/review_image.model");

// Get all images
const getReviewImages = async (req, res) => {
  try {
    const data = await ReviewImage.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get images by review
const getImagesByReview = async (req, res) => {
  try {
    const data = await ReviewImage.find({ reviewId: req.params.reviewId });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one image
const getReviewImage = async (req, res) => {
  try {
    const data = await ReviewImage.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Image not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create
const createReviewImage = async (req, res) => {
  try {
    const newData = new ReviewImage(req.body);
    await newData.save();

    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
const updateReviewImage = async (req, res) => {
  try {
    const data = await ReviewImage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!data) return res.status(404).json({ message: "Image not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
const deleteReviewImage = async (req, res) => {
  try {
    const data = await ReviewImage.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ message: "Image not found" });

    res.status(200).json({ message: "Image deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getReviewImages,
  getReviewImage,
  getImagesByReview,
  createReviewImage,
  updateReviewImage,
  deleteReviewImage
};

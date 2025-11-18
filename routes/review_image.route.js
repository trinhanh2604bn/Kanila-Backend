const express = require("express");
const router = express.Router();

const {
  getReviewImages,
  getReviewImage,
  getImagesByReview,
  createReviewImage,
  updateReviewImage,
  deleteReviewImage,
} = require("../controllers/review_image.controller");

// Get all images
router.get("/", getReviewImages);

// Get images by review
router.get("/review/:reviewId", getImagesByReview);

// Get one image
router.get("/:id", getReviewImage);

// Create
router.post("/", createReviewImage);

// Update
router.put("/:id", updateReviewImage);

// Delete
router.delete("/:id", deleteReviewImage);

module.exports = router;

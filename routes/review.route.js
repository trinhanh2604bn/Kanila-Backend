const express = require("express");
const router = express.Router();

const {
  getReviews,
  getReview,
  getReviewsByProduct,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/review.controller");

// Get all reviews
router.get("/", getReviews);

// Get reviews of a product
router.get("/product/:productId", getReviewsByProduct);

// Get one review
router.get("/:id", getReview);

// Create
router.post("/", createReview);

// Update
router.put("/:id", updateReview);

// Delete
router.delete("/:id", deleteReview);

module.exports = router;

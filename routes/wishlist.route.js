const express = require("express");
const router = express.Router();

const {
  getWishlists,
  getWishlistByUser,
  createWishlist,
  deleteWishlist
} = require("../controllers/wishlist.controller");

// Get all wishlist items (admin)
router.get("/", getWishlists);

// Get wishlist of a user
router.get("/user/:userId", getWishlistByUser);

// Add product to wishlist
router.post("/", createWishlist);

// Delete wishlist item
router.delete("/:id", deleteWishlist);

module.exports = router;

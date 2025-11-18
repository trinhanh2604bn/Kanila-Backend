const express = require("express");
const router = express.Router();

const {
  getCartItems,
  getItemsByCart,
  getCartItem,
  createCartItem,
  updateCartItem,
  deleteCartItem,
} = require("../controllers/cart_item.controller");

// Get all cart items
router.get("/", getCartItems);

// Get items of 1 cart
router.get("/cart/:cartId", getItemsByCart);

// Get one cart item
router.get("/:id", getCartItem);

// Create
router.post("/", createCartItem);

// Update
router.put("/:id", updateCartItem);

// Delete
router.delete("/:id", deleteCartItem);

module.exports = router;

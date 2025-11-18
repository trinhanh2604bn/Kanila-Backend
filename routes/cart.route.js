const express = require("express");
const router = express.Router();

const {
  getCarts,
  getCart,
  createCart,
  updateCart,
  deleteCart,
} = require("../controllers/cart.controller");

// Get all carts
router.get("/", getCarts);

// Get one cart
router.get("/:id", getCart);

// Create cart
router.post("/", createCart);

// Update cart
router.put("/:id", updateCart);

// Delete cart
router.delete("/:id", deleteCart);

module.exports = router;

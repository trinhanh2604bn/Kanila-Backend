const express = require("express");
const router = express.Router();

const {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order.controller");

// Get all
router.get("/", getOrders);

// Get one
router.get("/:id", getOrder);

// Create
router.post("/", createOrder);

// Update
router.put("/:id", updateOrder);

// Delete
router.delete("/:id", deleteOrder);

module.exports = router;

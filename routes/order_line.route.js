const express = require("express");
const router = express.Router();

const {
  getOrderLines,
  getLinesByOrder,
  getOrderLine,
  createOrderLine,
  updateOrderLine,
  deleteOrderLine,
} = require("../controllers/order_line.controller");

// Get all order lines
router.get("/", getOrderLines);

// Get lines of a specific order
router.get("/order/:orderId", getLinesByOrder);

// Get one
router.get("/:id", getOrderLine);

// Create
router.post("/", createOrderLine);

// Update
router.put("/:id", updateOrderLine);

// Delete
router.delete("/:id", deleteOrderLine);

module.exports = router;

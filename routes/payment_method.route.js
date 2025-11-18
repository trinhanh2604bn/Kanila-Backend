const express = require("express");
const router = express.Router();

const {
  getPaymentMethods,
  getPaymentMethod,
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod
} = require("../controllers/payment_method.controller");

// Get all
router.get("/", getPaymentMethods);

// Get one
router.get("/:id", getPaymentMethod);

// Create
router.post("/", createPaymentMethod);

// Update
router.put("/:id", updatePaymentMethod);

// Delete
router.delete("/:id", deletePaymentMethod);

module.exports = router;

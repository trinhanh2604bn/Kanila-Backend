const express = require("express");
const router = express.Router();

const {
  getAddresses,
  getAddress,
  createAddress,
  updateAddress,
  deleteAddress,
} = require("../controllers/address.controller");

// GET all addresses of one user
router.get("/", getAddresses);

// GET one address
router.get("/:id", getAddress);

// Create
router.post("/", createAddress);

// Update
router.put("/:id", updateAddress);

// Delete
router.delete("/:id", deleteAddress);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  getPromotionScopes,
  getPromotionScope,
  createPromotionScope,
  updatePromotionScope,
  deletePromotionScope
} = require("../controllers/promotion_scope.controller");

// Get all
router.get("/", getPromotionScopes);

// Get one
router.get("/:id", getPromotionScope);

// Create
router.post("/", createPromotionScope);

// Update
router.put("/:id", updatePromotionScope);

// Delete
router.delete("/:id", deletePromotionScope);

module.exports = router;

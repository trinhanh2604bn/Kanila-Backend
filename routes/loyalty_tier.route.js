const express = require("express");
const router = express.Router();

const {
  getLoyaltyTiers,
  getLoyaltyTier,
  createLoyaltyTier,
  updateLoyaltyTier,
  deleteLoyaltyTier
} = require("../controllers/loyalty_tier.controller");

// Get all
router.get("/", getLoyaltyTiers);

// Get one
router.get("/:id", getLoyaltyTier);

// Create
router.post("/", createLoyaltyTier);

// Update
router.put("/:id", updateLoyaltyTier);

// Delete
router.delete("/:id", deleteLoyaltyTier);

module.exports = router;

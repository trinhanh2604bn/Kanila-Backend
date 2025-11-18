const mongoose = require("mongoose");

const loyaltyTierSchema = new mongoose.Schema(
  {
    tierName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 50
    },

    minSpendRequired: {
      type: Number,
      required: true,
      default: 0,
      min: 0
    },

    benefits: {
      type: Object, // JSON
      default: null
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("LoyaltyTier", loyaltyTierSchema);

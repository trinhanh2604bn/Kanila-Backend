const mongoose = require("mongoose");

const promotionSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 50
    },

    discountType: {
      type: String,
      enum: ["PERCENT", "FIXED_AMOUNT"],
      required: true
    },

    discountValue: {
      type: Number,
      required: true,
      min: 0
    },

    startDate: {
      type: Date,
      required: true
    },

    endDate: {
      type: Date,
      required: true
    },

    usageLimit: {
      type: Number,
      default: null,
      min: 0
    },

    perUserLimit: {
      type: Number,
      default: null,
      min: 0
    },

    minOrderValue: {
      type: Number,
      default: 0,
      min: 0
    },

    maxDiscountValue: {
      type: Number,
      default: null,
      min: 0
    }
  },
  {
    timestamps: true // createdAt + updatedAt
  }
);

module.exports = mongoose.model("Promotion", promotionSchema);

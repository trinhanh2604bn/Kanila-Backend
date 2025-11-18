const mongoose = require("mongoose");

const promotionScopeSchema = new mongoose.Schema(
  {
    promoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Promotion",
      required: true
    },

    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      default: null
    },

    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("PromotionScope", promotionScopeSchema);

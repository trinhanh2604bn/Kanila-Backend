const mongoose = require("mongoose");

const orderLineSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true
    },

    priceSnapshot: {
      type: Number,
      required: true,
      min: 0
    },

    productNameSnapshot: {
      type: String,
      required: true,
      trim: true
    },

    quantity: {
      type: Number,
      required: true,
      min: 1
    },

    totalPrice: {
      type: Number,
      required: true,
      min: 0
    }
  },
  {
    timestamps: true // createdAt + updatedAt
  }
);

module.exports = mongoose.model("OrderLine", orderLineSchema);

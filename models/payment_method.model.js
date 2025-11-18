const mongoose = require("mongoose");

const paymentMethodSchema = new mongoose.Schema(
  {
    paymentMethodName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    }
  },
  {
    timestamps: true // createdAt + updatedAt
  }
);

module.exports = mongoose.model("PaymentMethod", paymentMethodSchema);

const mongoose = require("mongoose");

const paymentTransactionSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
      unique: true, // 1 order = 1 payment
    },

    paymentMethodId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PaymentMethod",
      required: true
    },

    paymentDate: {
      type: Date,
      required: true,
      default: Date.now
    },

    transactionId: {
      type: String,
      unique: true,
      sparse: true,
      default: null
    },

    amount: {
      type: Number,
      required: true,
      min: 0
    },

    status: {
      type: String,
      enum: ["Đang xử lý", "Thành công", "Thất bại", "Hoàn tiền"],
      default: "Đang xử lý"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("PaymentTransaction", paymentTransactionSchema);

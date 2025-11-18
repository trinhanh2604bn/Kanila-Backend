const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    promoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Promo",
      default: null,
    },

    address: {
      type: Object, // Lưu snapshot địa chỉ tại thời điểm đặt hàng
      required: true,
    },

    paymentMethodId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PaymentMethod",
      required: true
    },

    orderStatus: {
      type: String,
      enum: ["Đang xử lý", "Chờ giao hàng", "Đã giao", "Trả hàng", "Đã hủy"],
      default: "Đang xử lý",
      required: true
    },

    orderDate: {
      type: Date,
      default: Date.now
    },

    subtotalAmount: {
      type: Number,
      required: true,
      min: 0
    },

    shippingFee: {
      type: Number,
      required: true,
      min: 0
    },

    discountAmount: {
      type: Number,
      required: true,
      min: 0
    },

    totalAmount: {
      type: Number,
      required: true,
      min: 0
    },

    paymentStatus: {
      type: String,
      enum: ["Đã thanh toán", "Chờ thanh toán", "Đã hoàn tiền"],
      default: "Chờ thanh toán",
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Order", orderSchema);

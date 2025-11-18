const mongoose = require("mongoose");

const rmaSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    rmaStatus: {
      type: String,
      enum: [
        "Chờ xử lý",
        "Đã nhận hàng hoàn",
        "Đã hoàn tiền",
        "Từ chối",
        "Hủy"
      ],
      default: "Chờ xử lý",
      required: true
    },

    reason: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true // createdAt + updatedAt
  }
);

module.exports = mongoose.model("Rma", rmaSchema);

const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    }
  },
  {
    timestamps: { createdAt: true, updatedAt: false } // chỉ cần createdAt
  }
);

// Đảm bảo 1 user không thể lưu cùng 1 sản phẩm hai lần
wishlistSchema.index({ userId: 1, productId: 1 }, { unique: true });

module.exports = mongoose.model("Wishlist", wishlistSchema);

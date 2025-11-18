const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    brandName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    }
  },
  {
    timestamps: true, // tự tạo createdAt + updatedAt
  }
);

module.exports = mongoose.model("Brand", brandSchema);

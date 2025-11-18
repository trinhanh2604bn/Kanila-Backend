const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    }
  },
  {
    timestamps: true, // createdAt + updatedAt
  }
);

module.exports = mongoose.model("Category", categorySchema);

const mongoose = require("mongoose");

const reviewImageSchema = new mongoose.Schema(
  {
    reviewId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
      required: true,
    },

    url: {
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true // createdAt + updatedAt
  }
);

module.exports = mongoose.model("ReviewImage", reviewImageSchema);

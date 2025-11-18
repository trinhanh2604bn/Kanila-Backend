const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      unique: true,
      default: null, // Guest carts allowed
    },

    cartToken: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
      default: null
    }
  },
  {
    timestamps: true // createdAt + updatedAt
  }
);

module.exports = mongoose.model("Cart", cartSchema);

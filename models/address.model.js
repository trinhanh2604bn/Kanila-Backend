const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    receiverName: {
      type: String,
      trim: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    addressDetail: {
      type: String,
      trim: true,
    },

    ward: {
      type: String,
      trim: true
    },

    district: {
      type: String,
      trim: true
    },

    province: {
      type: String,
    },

    defaultFlag: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // createdAt + updatedAt
  }
);

// Ensure only 1 default address per user
addressSchema.index(
  { userId: 1, defaultFlag: 1 },
  { unique: true, partialFilterExpression: { defaultFlag: true } }
);

module.exports = mongoose.model("Address", addressSchema);

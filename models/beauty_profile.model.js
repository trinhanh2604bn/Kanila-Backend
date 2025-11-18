const mongoose = require("mongoose");

const beautyProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      unique: true,
      required: true
    },

    skinTypeName: {
      type: String,
      default: null,
      maxlength: 50
    },

    skinToneName: {
      type: String,
      default: null,
      maxlength: 50
    },

    eyeColorName: {
      type: String,
      default: null,
      maxlength: 50
    },

    ingredientName: {
      type: String,
      default: null,
      maxlength: 50
    },

    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      default: null
    }
  },
  {
    timestamps: { createdAt: false, updatedAt: true } // chỉ updatedAt
  }
);

module.exports = mongoose.model("BeautyProfile", beautyProfileSchema);

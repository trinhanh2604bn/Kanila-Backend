const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255
    },

    imageUrl: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500
    },

    content: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true // createdAt & updatedAt
  }
);

module.exports = mongoose.model("Post", postSchema);

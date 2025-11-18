const mongoose = require("mongoose");

const userBankAccountSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    bankName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },

    accountHolderName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },

    accountNumber: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    }
  },
  {
    timestamps: { createdAt: false, updatedAt: true } 
  }
);

module.exports = mongoose.model("UserBankAccount", userBankAccountSchema);

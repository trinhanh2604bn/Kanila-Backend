const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // loyalty_tier_id INT, FOREIGN KEY, NULL
    // Nếu sau này bạn có collection LoyaltyTier thì dùng ref như dưới,
    // còn chưa dùng tới thì có thể đổi sang type: Number hoặc String.
    loyaltyTierId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LoyaltyTier",
      default: null,
    },

    // full_name VARCHAR(100) NOT NULL
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    // password_hash VARCHAR(255) NOT NULL  (lưu mật khẩu đã hash)
    password: {
      type: String,
      required: true,
      trim:true,
    },

    // email VARCHAR(100) NOT NULL, UNIQUE
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    // phone VARCHAR(20) NOT NULL, UNIQUE
    phone: {
      type: String,
      unique: true,
      sparse: true, // cho phép null + unique
      trim: true,
    },

    // gender CHAR(1) NULL; { 'M', 'F', 'O' }
    gender: {
      type: String,
      default: "O",
    },

    // birth_date DATE NULL
    birthDate: {
      type: Date,
      default: null,
    },

    // status ENUM('active','blocked') DEFAULT 'active'
    status: {
      type: String,
      enum: ["active", "blocked"],
      default: "active",
    },
  },
  {
    // Tương ứng created_at, updated_at trong thiết kế
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("User", userSchema);



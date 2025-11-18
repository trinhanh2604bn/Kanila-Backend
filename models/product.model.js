const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    // Nếu bạn có bảng BRAND, CATEGORY riêng:
    brandId: { type: mongoose.Schema.Types.ObjectId, ref: "Brand" },  // tương ứng brand_id
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }, // category_id

    productName: { type: String, required: true }, // product_name
    price: { type: Number, required: true },       // DECIMAL -> Number
    averageRating: { type: Number, default: 0 },   // average_rating

    imageUrl: { type: String },                    // image_url
    highlight: { type: mongoose.Schema.Types.Mixed }, // JSON (có thể là object hoặc array)

    description: { type: String },                 // TEXT
    ingredients: { type: String },                 // TEXT
    usageInstructions: { type: String },           // TEXT

    stock: { type: Number, default: 0 },           // tồn kho
    bought: { type: Number, default: 0 },          // đã bán

    isActive: { type: Boolean, default: true }     // is_active
  },
  {
    timestamps: true // tự tạo createdAt, updatedAt
  }
);

module.exports = mongoose.model("Product", productSchema);

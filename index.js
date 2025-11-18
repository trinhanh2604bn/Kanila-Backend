require('dotenv').config()
const express = require('express')
const mongoose =require('mongoose')
const cors = require('cors')
const connectDB = require("./config/db.js")

const productRoutes = require("./routes/product.route.js");
const userRoutes = require("./routes/user.route.js");
const addressRoutes = require("./routes/address.route.js");
const brandRoutes = require("./routes/brand.route.js");
const categoryRoutes = require("./routes/category.route.js");
const reviewImageRoutes = require("./routes/review_image.route.js");
const paymentMethodRoutes = require("./routes/payment_method.route.js");
const cartRoutes = require("./routes/cart.route.js");
const cartItemRoutes = require("./routes/cart_item.route.js");
const orderRoutes = require("./routes/order.route.js");
const reviewRoutes = require("./routes/review.route.js");
const orderLineRoutes = require("./routes/order_line.route.js");
const paymentTransactionRoutes = require("./routes/payment_transaction.route.js");
const rmaRoutes = require("./routes/rma.route.js");
const postRoutes = require("./routes/post.route.js");
const commentRoutes = require("./routes/comment.route.js");
const promotionScopeRoutes = require("./routes/promotion_scope.route.js");
const loyaltyTierRoutes = require("./routes/loyalty_tier.route.js");
const beautyProfileRoutes = require("./routes/beauty_profile.route.js");
const userBankAccountRoutes = require("./routes/user_bank_account.route.js");
const wishlistRoutes = require("./routes/wishlist.route.js");
const promotionRoutes = require("./routes/promotion.route.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

connectDB();

app.get("/", (req, res) => res.send("🚀 BeautyShop API is running..."));

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/addresses", addressRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/review-images", reviewImageRoutes);
app.use("/api/payment-methods", paymentMethodRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/cart-items", cartItemRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/order-lines", orderLineRoutes);
app.use("/api/payment-transactions", paymentTransactionRoutes);
app.use("/api/rmas", rmaRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/promotion-scopes", promotionScopeRoutes);
app.use("/api/loyalty-tiers", loyaltyTierRoutes);
app.use("/api/beauty-profiles", beautyProfileRoutes);
app.use("/api/user-bank-accounts", userBankAccountRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/promotions", promotionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`⚡ Server running on port ${PORT}`));
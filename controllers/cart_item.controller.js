const CartItem = require("../models/cart_item.model");

// Get all cart items
const getCartItems = async (req, res) => {
  try {
    const data = await CartItem.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get cart items by cart ID
const getItemsByCart = async (req, res) => {
  try {
    const data = await CartItem.find({ cartId: req.params.cartId })
      .populate("productId"); // Optional: load product info
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one cart item
const getCartItem = async (req, res) => {
  try {
    const data = await CartItem.findById(req.params.id);

    if (!data) return res.status(404).json({ message: "Cart item not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create
const createCartItem = async (req, res) => {
  try {
    const newData = new CartItem(req.body);
    await newData.save();

    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
const updateCartItem = async (req, res) => {
  try {
    const data = await CartItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!data) return res.status(404).json({ message: "Cart item not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
const deleteCartItem = async (req, res) => {
  try {
    const data = await CartItem.findByIdAndDelete(req.params.id);

    if (!data) return res.status(404).json({ message: "Cart item not found" });

    res.status(200).json({ message: "Cart item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getCartItems,
  getItemsByCart,
  getCartItem,
  createCartItem,
  updateCartItem,
  deleteCartItem,
};

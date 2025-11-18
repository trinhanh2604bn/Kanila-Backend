const Cart = require("../models/cart.model");

// Get all carts
const getCarts = async (req, res) => {
  try {
    const data = await Cart.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one cart
const getCart = async (req, res) => {
  try {
    const data = await Cart.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Cart not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create cart
const createCart = async (req, res) => {
  try {
    const newData = new Cart(req.body);
    await newData.save();

    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update cart
const updateCart = async (req, res) => {
  try {
    const data = await Cart.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!data) return res.status(404).json({ message: "Cart not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete cart
const deleteCart = async (req, res) => {
  try {
    const data = await Cart.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ message: "Cart not found" });

    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getCarts,
  getCart,
  createCart,
  updateCart,
  deleteCart,
};

const Order = require("../models/order.model");

// Get all orders
const getOrders = async (req, res) => {
  try {
    const data = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one order
const getOrder = async (req, res) => {
  try {
    const data = await Order.findById(req.params.id);

    if (!data) return res.status(404).json({ message: "Order not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create order
const createOrder = async (req, res) => {
  try {
    const newData = new Order(req.body);
    await newData.save();

    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update order
const updateOrder = async (req, res) => {
  try {
    const data = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!data) return res.status(404).json({ message: "Order not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete order
const deleteOrder = async (req, res) => {
  try {
    const data = await Order.findByIdAndDelete(req.params.id);

    if (!data) return res.status(404).json({ message: "Order not found" });

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};

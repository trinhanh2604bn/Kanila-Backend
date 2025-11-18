const OrderLine = require("../models/order_line.model");

// Get all
const getOrderLines = async (req, res) => {
  try {
    const data = await OrderLine.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all lines by order
const getLinesByOrder = async (req, res) => {
  try {
    const data = await OrderLine.find({ orderId: req.params.orderId });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one
const getOrderLine = async (req, res) => {
  try {
    const data = await OrderLine.findById(req.params.id);

    if (!data) return res.status(404).json({ message: "Order line not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create
const createOrderLine = async (req, res) => {
  try {
    const newData = new OrderLine(req.body);
    await newData.save();

    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
const updateOrderLine = async (req, res) => {
  try {
    const data = await OrderLine.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!data) return res.status(404).json({ message: "Order line not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
const deleteOrderLine = async (req, res) => {
  try {
    const data = await OrderLine.findByIdAndDelete(req.params.id);

    if (!data) return res.status(404).json({ message: "Order line not found" });

    res.status(200).json({ message: "Order line deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getOrderLines,
  getLinesByOrder,
  getOrderLine,
  createOrderLine,
  updateOrderLine,
  deleteOrderLine,
};

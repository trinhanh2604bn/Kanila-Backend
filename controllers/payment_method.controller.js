const PaymentMethod = require("../models/payment_method.model");

// Get all
const getPaymentMethods = async (req, res) => {
  try {
    const data = await PaymentMethod.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one
const getPaymentMethod = async (req, res) => {
  try {
    const data = await PaymentMethod.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Payment method not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create
const createPaymentMethod = async (req, res) => {
  try {
    const newData = new PaymentMethod(req.body);
    await newData.save();

    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
const updatePaymentMethod = async (req, res) => {
  try {
    const data = await PaymentMethod.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!data) return res.status(404).json({ message: "Payment method not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
const deletePaymentMethod = async (req, res) => {
  try {
    const data = await PaymentMethod.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ message: "Payment method not found" });

    res.status(200).json({ message: "Payment method deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getPaymentMethods,
  getPaymentMethod,
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod
};

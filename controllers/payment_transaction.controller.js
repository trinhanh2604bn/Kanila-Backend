const PaymentTransaction = require("../models/payment_transaction.model");

// Get all
const getPayments = async (req, res) => {
  try {
    const data = await PaymentTransaction.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one
const getPayment = async (req, res) => {
  try {
    const data = await PaymentTransaction.findById(req.params.id);

    if (!data) return res.status(404).json({ message: "Payment transaction not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create
const createPayment = async (req, res) => {
  try {
    const newData = new PaymentTransaction(req.body);
    await newData.save();

    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
const updatePayment = async (req, res) => {
  try {
    const data = await PaymentTransaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!data) return res.status(404).json({ message: "Payment transaction not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
const deletePayment = async (req, res) => {
  try {
    const data = await PaymentTransaction.findByIdAndDelete(req.params.id);

    if (!data) return res.status(404).json({ message: "Payment transaction not found" });

    res.status(200).json({ message: "Payment transaction deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getPayments,
  getPayment,
  createPayment,
  updatePayment,
  deletePayment,
};

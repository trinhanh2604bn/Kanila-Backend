const Address = require("../models/address.model");

// Get all addresses of a user
const getAddresses = async (req, res) => {
  try {
    const data = await Address.find({ userId: req.params.userId });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one
const getAddress = async (req, res) => {
  try {
    const data = await Address.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Address not found" });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create
const createAddress = async (req, res) => {
  try {
    const newData = new Address(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
const updateAddress = async (req, res) => {
  try {
    const data = await Address.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!data) return res.status(404).json({ message: "Address not found" });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
const deleteAddress = async (req, res) => {
  try {
    const data = await Address.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ message: "Address not found" });
    res.status(200).json({ message: "Address deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAddresses,
  getAddress,
  createAddress,
  updateAddress,
  deleteAddress,
};


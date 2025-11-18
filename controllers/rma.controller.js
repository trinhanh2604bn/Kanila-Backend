const Rma = require("../models/rma.model");

// Get all
const getRmas = async (req, res) => {
  try {
    const data = await Rma.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one
const getRma = async (req, res) => {
  try {
    const data = await Rma.findById(req.params.id);

    if (!data) return res.status(404).json({ message: "RMA request not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create
const createRma = async (req, res) => {
  try {
    const newData = new Rma(req.body);
    await newData.save();

    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
const updateRma = async (req, res) => {
  try {
    const data = await Rma.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!data) return res.status(404).json({ message: "RMA request not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
const deleteRma = async (req, res) => {
  try {
    const data = await Rma.findByIdAndDelete(req.params.id);

    if (!data) return res.status(404).json({ message: "RMA request not found" });

    res.status(200).json({ message: "RMA request deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getRmas,
  getRma,
  createRma,
  updateRma,
  deleteRma
};

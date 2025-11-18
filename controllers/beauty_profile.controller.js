const BeautyProfile = require("../models/beauty_profile.model");

// Get all profiles
const getBeautyProfiles = async (req, res) => {
  try {
    const data = await BeautyProfile.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get profile by user
const getBeautyProfile = async (req, res) => {
  try {
    const data = await BeautyProfile.findOne({ userId: req.params.userId });

    if (!data) return res.status(404).json({ message: "Beauty profile not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create profile
const createBeautyProfile = async (req, res) => {
  try {
    const exists = await BeautyProfile.findOne({ userId: req.body.userId });
    if (exists) {
      return res.status(400).json({ message: "Beauty profile already exists for this user" });
    }

    const newData = new BeautyProfile(req.body);
    await newData.save();

    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update profile
const updateBeautyProfile = async (req, res) => {
  try {
    const data = await BeautyProfile.findOneAndUpdate(
      { userId: req.params.userId },
      req.body,
      { new: true }
    );

    if (!data) return res.status(404).json({ message: "Beauty profile not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete profile
const deleteBeautyProfile = async (req, res) => {
  try {
    const data = await BeautyProfile.findOneAndDelete({ userId: req.params.userId });

    if (!data) return res.status(404).json({ message: "Beauty profile not found" });

    res.status(200).json({ message: "Beauty profile deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getBeautyProfiles,
  getBeautyProfile,
  createBeautyProfile,
  updateBeautyProfile,
  deleteBeautyProfile,
};

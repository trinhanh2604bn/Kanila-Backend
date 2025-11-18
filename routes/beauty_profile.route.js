const express = require("express");
const router = express.Router();

const {
  getBeautyProfiles,
  getBeautyProfile,
  createBeautyProfile,
  updateBeautyProfile,
  deleteBeautyProfile
} = require("../controllers/beauty_profile.controller");

// Get all
router.get("/", getBeautyProfiles);

// Get one (by userId)
router.get("/:userId", getBeautyProfile);

// Create
router.post("/", createBeautyProfile);

// Update
router.put("/:userId", updateBeautyProfile);

// Delete
router.delete("/:userId", deleteBeautyProfile);

module.exports = router;

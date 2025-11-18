const express = require("express");
const router = express.Router();

const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/post.controller");

// Get all
router.get("/", getPosts);

// Get one
router.get("/:id", getPost);

// Create
router.post("/", createPost);

// Update
router.put("/:id", updatePost);

// Delete
router.delete("/:id", deletePost);

module.exports = router;

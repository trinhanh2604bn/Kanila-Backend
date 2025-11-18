const express = require("express");
const router = express.Router();

const {
  getComments,
  getCommentsByPost,
  getComment,
  createComment,
  updateComment,
  deleteComment
} = require("../controllers/comment.controller");

// Get all comments
router.get("/", getComments);

// Get comments of a specific post
router.get("/post/:postId", getCommentsByPost);

// Get one comment
router.get("/:id", getComment);

// Create
router.post("/", createComment);

// Update
router.put("/:id", updateComment);

// Delete
router.delete("/:id", deleteComment);

module.exports = router;

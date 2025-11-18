const Comment = require("../models/comment.model");

// Get all comments
const getComments = async (req, res) => {
  try {
    const data = await Comment.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get comments by post
const getCommentsByPost = async (req, res) => {
  try {
    const data = await Comment.find({ postId: req.params.postId }).sort({ createdAt: 1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one comment
const getComment = async (req, res) => {
  try {
    const data = await Comment.findById(req.params.id);

    if (!data) return res.status(404).json({ message: "Comment not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create comment
const createComment = async (req, res) => {
  try {
    const newData = new Comment(req.body);
    await newData.save();

    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update comment
const updateComment = async (req, res) => {
  try {
    const data = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!data) return res.status(404).json({ message: "Comment not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete comment
const deleteComment = async (req, res) => {
  try {
    const data = await Comment.findByIdAndDelete(req.params.id);

    if (!data) return res.status(404).json({ message: "Comment not found" });

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getComments,
  getCommentsByPost,
  getComment,
  createComment,
  updateComment,
  deleteComment,
};

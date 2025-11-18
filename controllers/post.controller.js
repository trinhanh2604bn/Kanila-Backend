const Post = require("../models/post.model");

// Get all
const getPosts = async (req, res) => {
  try {
    const data = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one
const getPost = async (req, res) => {
  try {
    const data = await Post.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Post not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create
const createPost = async (req, res) => {
  try {
    const newData = new Post(req.body);
    await newData.save();

    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
const updatePost = async (req, res) => {
  try {
    const data = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!data) return res.status(404).json({ message: "Post not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
const deletePost = async (req, res) => {
  try {
    const data = await Post.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ message: "Post not found" });

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};

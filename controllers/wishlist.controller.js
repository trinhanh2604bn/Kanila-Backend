const Wishlist = require("../models/wishlist.model");

// Get all wishlist items (admin-level)
const getWishlists = async (req, res) => {
  try {
    const data = await Wishlist.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get wishlist by user
const getWishlistByUser = async (req, res) => {
  try {
    const data = await Wishlist.find({ userId: req.params.userId });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add to wishlist
const createWishlist = async (req, res) => {
  try {
    const exists = await Wishlist.findOne({
      userId: req.body.userId,
      productId: req.body.productId
    });

    if (exists) {
      return res.status(400).json({ message: "Product already in wishlist" });
    }

    const newData = new Wishlist(req.body);
    await newData.save();

    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete wishlist item
const deleteWishlist = async (req, res) => {
  try {
    const data = await Wishlist.findByIdAndDelete(req.params.id);

    if (!data) return res.status(404).json({ message: "Wishlist item not found" });

    res.status(200).json({ message: "Wishlist item removed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getWishlists,
  getWishlistByUser,
  createWishlist,
  deleteWishlist,
};

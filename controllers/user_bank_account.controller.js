const UserBankAccount = require("../models/user_bank_account.model");

// Get all
const getUserBankAccounts = async (req, res) => {
  try {
    const data = await UserBankAccount.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get accounts by user
const getUserBankAccount = async (req, res) => {
  try {
    const data = await UserBankAccount.findOne({ userId: req.params.userId });

    if (!data) return res.status(404).json({ message: "Bank account not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create
const createUserBankAccount = async (req, res) => {
  try {
    const exists = await UserBankAccount.findOne({ userId: req.body.userId });
    if (exists) {
      return res.status(400).json({ message: "User already has a bank account" });
    }

    const newData = new UserBankAccount(req.body);
    await newData.save();

    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
const updateUserBankAccount = async (req, res) => {
  try {
    const data = await UserBankAccount.findOneAndUpdate(
      { userId: req.params.userId },
      req.body,
      { new: true }
    );

    if (!data) return res.status(404).json({ message: "Bank account not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
const deleteUserBankAccount = async (req, res) => {
  try {
    const data = await UserBankAccount.findOneAndDelete({ userId: req.params.userId });

    if (!data) return res.status(404).json({ message: "Bank account not found" });

    res.status(200).json({ message: "Bank account deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getUserBankAccounts,
  getUserBankAccount,
  createUserBankAccount,
  updateUserBankAccount,
  deleteUserBankAccount,
};

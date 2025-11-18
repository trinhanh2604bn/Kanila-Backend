const express = require("express");
const router = express.Router();

const {
  getUserBankAccounts,
  getUserBankAccount,
  createUserBankAccount,
  updateUserBankAccount,
  deleteUserBankAccount
} = require("../controllers/user_bank_account.controller");

// Get all
router.get("/", getUserBankAccounts);

// Get user bank account
router.get("/:userId", getUserBankAccount);

// Create
router.post("/", createUserBankAccount);

// Update
router.put("/:userId", updateUserBankAccount);

// Delete
router.delete("/:userId", deleteUserBankAccount);

module.exports = router;

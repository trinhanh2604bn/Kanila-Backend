const express = require("express");
const router = express.Router();

const {
  getPayments,
  getPayment,
  createPayment,
  updatePayment,
  deletePayment,
} = require("../controllers/payment_transaction.controller");

router.get("/", getPayments);

router.get("/:id", getPayment);

router.post("/", createPayment);

router.put("/:id", updatePayment);

router.delete("/:id", deletePayment);

module.exports = router;

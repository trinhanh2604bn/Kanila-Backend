const express = require("express");
const router = express.Router();

const {
  getPromotions,
  getPromotion,
  createPromotion,
  updatePromotion,
  deletePromotion
} = require("../controllers/promotion.controller");

router.get("/", getPromotions);

router.get("/:id", getPromotion);

router.post("/", createPromotion);

router.put("/:id", updatePromotion);

router.delete("/:id", deletePromotion);

module.exports = router;

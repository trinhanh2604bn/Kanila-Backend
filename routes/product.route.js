const express = require("express")
const router = express.Router()
const {getProducts, getProduct, createProduct, updatedProduct, deleteProduct}= require('../controllers/product.controller.js')


// GET ALL
router.get("/", getProducts);

// GET ONE
router.get("/:id", getProduct);

// CREATE
router.post("/", createProduct);

// UPDATE
router.put("/:id", updatedProduct);

// DELETE
router.delete("/:id", deleteProduct);

module.exports = router;
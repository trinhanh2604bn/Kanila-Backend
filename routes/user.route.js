const express = require("express")
const router = express.Router()

const {
  register,
  login,
  getUser,
  updateProfile,
  changePassword,
  deleteAccount,
  getUsers
} = require("../controllers/user.controller.js")

const auth = require("../middlewares/auth.js")

router.post("/register", register)

router.post("/login", login)

router.get("/:id", getUser)

router.put("/u/:id", updateProfile)

router.put("/c/:id", changePassword)

router.delete("/:id", deleteAccount)

router.get("/", getUsers)

module.exports = router

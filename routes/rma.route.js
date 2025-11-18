const express = require("express");
const router = express.Router();

const {
  getRmas,
  getRma,
  createRma,
  updateRma,
  deleteRma
} = require("../controllers/rma.controller");

router.get("/", getRmas);

router.get("/:id", getRma);

router.post("/", createRma);

router.put("/:id", updateRma);

router.delete("/:id", deleteRma);

module.exports = router;

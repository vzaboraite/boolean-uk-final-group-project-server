const express = require("express");

const {
  createUserAndProfile,
  getAllUsers,
  getUserById,
} = require("./controller");

const router = express.Router();

router.post("/", createUserAndProfile);

router.get("/", getAllUsers);

router.get("/:id", getUserById);

module.exports = router;

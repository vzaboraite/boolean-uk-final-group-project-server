const express = require("express");

const { createUserAndProfile, getAllUsers } = require("./controller");

const router = express.Router();

router.post("/", createUserAndProfile);

router.get("/", getAllUsers);

module.exports = router;

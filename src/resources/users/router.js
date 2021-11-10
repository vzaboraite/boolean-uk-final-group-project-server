const express = require("express");

const { createUserAndProfile } = require("./controller");

const router = express.Router();

router.post("/", createUserAndProfile);

module.exports = router;

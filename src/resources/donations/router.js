const express = require("express");
const { getAllDonations } = require("./controller");

const router = express.Router();

router.get("/", getAllDonations);

module.exports = router;

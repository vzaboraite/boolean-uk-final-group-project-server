const express = require("express");
const { getAllDonations, getOneDonationByProjectId } = require("./controller");

const router = express.Router();

router.get("/", getAllDonations);

router.get("/:projectId", getOneDonationByProjectId);

module.exports = router;

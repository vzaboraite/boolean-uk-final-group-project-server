const express = require("express");
const {
  getAllDonations,
  getOneDonationByProjectId,
  createDonationForProject,
} = require("./controller");

const router = express.Router();

router.get("/", getAllDonations);

router.get("/:projectId", getOneDonationByProjectId);

router.post("/", createDonationForProject);

module.exports = router;

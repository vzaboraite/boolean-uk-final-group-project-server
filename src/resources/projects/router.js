const express = require("express");

const { getAllProjects, getProjectById } = require("./controller");

const router = express.Router();

router.get("/", getAllProjects);

router.get("/:id", getProjectById);

module.exports = router;

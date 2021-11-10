const express = require("express");

const { getAllProjects } = require("./controller");

const router = express.Router();

router.get("/", getAllProjects);

module.exports = router;

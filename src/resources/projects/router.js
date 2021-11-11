const express = require("express");

const {
  getAllProjects,
  getProjectById,
  getAllProjectsByCategory,
} = require("./controller");

const router = express.Router();

router.get("/", getAllProjects);

router.get("/projects/:category", getAllProjectsByCategory);

router.get("/:id", getProjectById);

module.exports = router;

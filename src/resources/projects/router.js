const express = require("express");

const {
  getAllProjects,
  getProjectById,
  getAllProjectsByCategory,
  createProject,
} = require("./controller");

const router = express.Router();

router.get("/", getAllProjects);

router.get("/projects/:category", getAllProjectsByCategory);

router.get("/:id", getProjectById);

router.post("/", createProject);

module.exports = router;

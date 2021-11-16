const express = require("express");

const {
  getAllProjects,
  getProjectById,
  getAllProjectsByCategory,
  createProject,
  updateProjectById,
} = require("./controller");

const router = express.Router();

router.get("/", getAllProjects);

router.get("/projects/:category", getAllProjectsByCategory);

router.get("/:id", getProjectById);

router.post("/", createProject);

router.put("/:id", updateProjectById);

module.exports = router;

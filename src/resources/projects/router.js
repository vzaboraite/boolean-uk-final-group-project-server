const express = require("express");

const {
  getAllProjects,
  getProjectById,
  getAllProjectsByCategory,
  createProject,
  updateProjectById,
  deleteProjectById,
} = require("./controller");

const router = express.Router();

router.get("/", getAllProjects);

router.get("/projects/:category", getAllProjectsByCategory);

router.get("/:id", getProjectById);

router.post("/", createProject);

router.put("/:id", updateProjectById);

router.delete("/:id", deleteProjectById);

module.exports = router;

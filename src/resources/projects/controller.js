const { prisma } = require("../../utils/db");

const getAllProjects = async (req, res) => {
  try {
    const result = await prisma.project.findMany();
    res.json({ data: result });
  } catch (error) {
    console.error({ error: error.message });
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getAllProjects,
};

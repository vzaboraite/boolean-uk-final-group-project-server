const { prisma } = require("../../utils/db");

const getAllProjects = async (req, res) => {
  try {
    const result = await prisma.project.findMany();
    res.json(result);
  } catch (error) {
    console.error({ error: error.message });
    res.status(500).json({ error: error.message });
  }
};

const getProjectById = async (req, res) => {
  /* 
  Resources:
  unary plus operator => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus 
  */
  const targetId = +req.params.id;
  try {
    const result = await prisma.project.findFirst({
      where: {
        id: targetId,
      },
      include: {
        user: {
          include: {
            profile: true,
          },
        },
        categories: true,
        donations: true,
      },
    });
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error({ error: error.message });
    res.status(500).json({ error: error.message });
  }
};

const getAllProjectsByCategory = async (req, res) => {
  const data = req.params.category;

  try {
    const result = await prisma.project.findMany({
      where: {
        categories: {
          some: {
            category: {
              name: data,
            },
          },
        },
      },
      include: {
        user: true,
        donations: true,
        categories: true,
      },
    });
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error({ error: error.message });
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  getAllProjectsByCategory,
};

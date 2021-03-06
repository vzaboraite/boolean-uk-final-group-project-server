const { prisma } = require("../../utils/db");

const getAllProjects = async (req, res) => {
  const { title, userName } = req.query;

  try {
    let queryOptions = {
      include: {
        user: {
          include: {
            profile: true,
          },
        },
        categories: {
          include: {
            category: true,
          },
        },
        donations: true,
      },
    };

    if (title) {
      queryOptions.where = {
        title: {
          contains: title,
        },
      };
    }

    if (userName) {
      queryOptions.where = {
        user: {
          name: {
            contains: userName,
          },
        },
      };
    }

    const result = await prisma.project.findMany(queryOptions);

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
        categories: {
          include: {
            category: true,
          },
        },
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
              name: {
                equals: data,
                mode: "insensitive",
              },
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

const createProject = async (req, res) => {
  const { title, description, goal, userId, categoryIds } = req.body;

  try {
    const result = await prisma.project.create({
      data: {
        title,
        description,
        goal,
        user: {
          connect: {
            id: parseInt(userId),
          },
        },
        categories: {
          create: categoryIds.map((id) => ({
            category: {
              connect: {
                id: id,
              },
            },
          })),
        },
      },
      include: {
        user: {
          include: {
            profile: true,
          },
        },
        categories: {
          include: {
            category: true,
          },
        },
        donations: true,
      },
    });

    res.json(result);
  } catch (error) {
    console.error({ error: error.message });
    res.status(500).json({ error: error.message });
  }
};

const updateProjectById = async (req, res) => {
  console.log({ body: req.body });

  const projectToUpdate = {
    id: req.params.id,
    ...req.body,
  };
  const { title, description, goal, categoryIds, userId } = projectToUpdate;

  try {
    const result = await prisma.project.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        title: title,
        description: description,
        goal: goal,
        user: {
          connect: {
            id: parseInt(userId),
          },
        },
        categories: {
          deleteMany: {
            categoryId: { notIn: categoryIds },
          },
          connectOrCreate: categoryIds.map((id) => ({
            where: {
              categoryId_projectId: {
                projectId: parseInt(req.params.id),
                categoryId: parseInt(id),
              },
            },
            create: {
              category: {
                connect: {
                  id: id,
                },
              },
            },
          })),
        },
      },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
      },
    });
    const clearProject = {
      ...result,
      categories: result.categories.map((category) => {
        console.log("INSIDE CATEGORY --> ", category);
        return category.category;
      }),
    };
    res.json(clearProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

const deleteProjectById = async (req, res) => {
  const { id } = req.params;
  const targetProjectId = parseInt(id);

  try {
    const disconnectCategories = prisma.categoryOnProjects.deleteMany({
      where: {
        projectId: targetProjectId,
      },
    });

    const disconnectDonations = prisma.donation.deleteMany({
      where: {
        projectId: targetProjectId,
      },
    });

    const deleteProject = prisma.project.delete({
      where: {
        id: targetProjectId,
      },
    });

    const result = await prisma.$transaction([
      disconnectCategories,
      disconnectDonations,
      deleteProject,
    ]);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  getAllProjectsByCategory,
  createProject,
  updateProjectById,
  deleteProjectById,
};

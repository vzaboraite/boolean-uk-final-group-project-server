const { prisma } = require("../../utils/db");

const createUserAndProfile = async (req, res) => {
  const data = req.body;

  const { name, profile } = data;
  const { email, country } = profile;

  try {
    const result = await prisma.user.create({
      data: {
        name,
        profile: {
          create: { email, country },
        },
      },
      include: {
        profile: true,
        projects: true,
        donations: true,
      },
    });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const result = await prisma.user.findMany();
    res.json(result);
  } catch (error) {
    console.error({ error: error.message });
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUserAndProfile, getAllUsers };

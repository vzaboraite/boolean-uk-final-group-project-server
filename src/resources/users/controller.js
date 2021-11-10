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

module.exports = { createUserAndProfile };

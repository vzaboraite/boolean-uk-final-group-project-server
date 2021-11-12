const { prisma } = require("../../utils/db");

const getAllDonations = async (req, res) => {
  try {
    const result = await prisma.donation.findMany({
      include: {
        user: true,
        project: true,
      },
    });
    res.json(result);
  } catch (error) {
    console.error({ error: error.message });
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllDonations };

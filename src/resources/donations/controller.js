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

const getOneDonationByProjectId = async (req, res) => {
  const { projectId } = req.params;
  const targetId = parseInt(projectId);

  try {
    const result = await prisma.donation.findFirst({
      where: {
        projectId: targetId,
      },
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

module.exports = { getAllDonations, getOneDonationByProjectId };

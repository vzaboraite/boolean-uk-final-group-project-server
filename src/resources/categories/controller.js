const { prisma } = require("../../utils/db");

const getAllCategories = async (req, res) => {
  try {
    const result = await prisma.category.findMany();
    res.json(result);
  } catch (error) {
    console.error({ error: error.message });
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllCategories };

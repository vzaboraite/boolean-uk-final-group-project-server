const { prisma } = require("../src/utils/db");

async function seed() {
  const deleteCategoryOnProjects = prisma.categoryOnProjects.deleteMany();
  const deleteDonations = prisma.donation.deleteMany();
  const deleteCategories = prisma.category.deleteMany();
  const deleteProjects = prisma.project.deleteMany();
  const deleteProfiles = prisma.profile.deleteMany();
  const deleteUsers = prisma.user.deleteMany();

  await prisma.$transaction([
    deleteCategoryOnProjects,
    deleteDonations,
    deleteCategories,
    deleteProjects,
    deleteProfiles,
    deleteUsers,
  ]);

  const rick = await prisma.user.create({
    data: {
      name: "Rick",
      profile: {
        create: {
          email: "rick@fuckyou.com",
          country: "BR",
        },
      },
    },
  });

  const morty = await prisma.user.create({
    data: {
      name: "Morty",
      profile: {
        create: {
          email: "morty@fuckyou.com",
          country: "BR",
        },
      },
    },
  });

  let categories = [
    "Photography",
    "Poetry",
    "Sculpture",
    "Painting",
    "Music",
    "Literature",
    "Fashion",
  ];

  let generatedCategories = [];

  for (let i = 0; i < categories.length; i++) {
    const categoryName = categories[i];
    const category = await prisma.category.create({
      data: {
        name: categoryName,
      },
    });
    generatedCategories.push(category);
  }

  const createdProject = await prisma.project.create({
    data: {
      title: "Rick and Morty",
      description: "Cartoon",
      goal: 2000,
      user: {
        connect: {
          id: rick.id,
        },
      },
    },
  });

  const categoryOnProjects = await prisma.categoryOnProjects.create({
    data: {
      categoryId: generatedCategories[0].id,
      projectId: createdProject.id,
    },
  });

  const donations = await prisma.donation.create({
    data: {
      amount: 100,
      userId: morty.id,
      projectId: createdProject.id,
    },
  });
}

seed()
  .catch((error) => {
    console.log(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });

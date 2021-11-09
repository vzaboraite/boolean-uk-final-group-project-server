-- CreateTable
CREATE TABLE "categoryOnProjects" (
    "categoryId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "categoryOnProjects_pkey" PRIMARY KEY ("categoryId","projectId")
);

-- AddForeignKey
ALTER TABLE "categoryOnProjects" ADD CONSTRAINT "categoryOnProjects_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categoryOnProjects" ADD CONSTRAINT "categoryOnProjects_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

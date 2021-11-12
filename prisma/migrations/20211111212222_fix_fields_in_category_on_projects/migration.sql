-- DropForeignKey
ALTER TABLE "CategoryOnProjects" DROP CONSTRAINT "CategoryOnProjects_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryOnProjects" DROP CONSTRAINT "CategoryOnProjects_projectId_fkey";

-- AddForeignKey
ALTER TABLE "CategoryOnProjects" ADD CONSTRAINT "CategoryOnProjects_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryOnProjects" ADD CONSTRAINT "CategoryOnProjects_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

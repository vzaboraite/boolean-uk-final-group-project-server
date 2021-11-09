/*
  Warnings:

  - Added the required column `projectId` to the `donation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "donation" ADD COLUMN     "projectId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "donation" ADD CONSTRAINT "donation_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

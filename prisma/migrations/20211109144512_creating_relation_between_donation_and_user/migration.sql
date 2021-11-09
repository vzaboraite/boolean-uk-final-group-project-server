/*
  Warnings:

  - Added the required column `userId` to the `donation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "donation" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "donation" ADD CONSTRAINT "donation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `profile` on the `User` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Bait` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bait" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "profile";

-- AddForeignKey
ALTER TABLE "Bait" ADD CONSTRAINT "Bait_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

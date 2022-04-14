/*
  Warnings:

  - You are about to drop the column `Role` on the `RefreshToken` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RefreshToken" DROP COLUMN "Role",
ADD COLUMN     "role" TEXT NOT NULL DEFAULT E'User';

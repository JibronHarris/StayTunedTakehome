-- AlterTable
ALTER TABLE "RefreshToken" ADD COLUMN     "role" TEXT NOT NULL DEFAULT E'User';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" TEXT NOT NULL DEFAULT E'User';

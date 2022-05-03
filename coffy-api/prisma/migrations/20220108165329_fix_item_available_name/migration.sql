/*
  Warnings:

  - You are about to drop the column `isAvaliable` on the `Item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "isAvaliable",
ADD COLUMN     "isAvailable" BOOLEAN NOT NULL DEFAULT true;

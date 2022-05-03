/*
  Warnings:

  - You are about to drop the column `code` on the `Order` table. All the data in the column will be lost.
  - Added the required column `stateCode` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_code_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "code",
ADD COLUMN     "stateCode" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_stateCode_fkey" FOREIGN KEY ("stateCode") REFERENCES "OrderState"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

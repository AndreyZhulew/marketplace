/*
  Warnings:

  - You are about to drop the column `category` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `productType` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `subcategory` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[subcategoryId]` on the table `ProductType` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "category",
DROP COLUMN "productType",
DROP COLUMN "subcategory",
ADD COLUMN     "productTypeId" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "DeliveryInfo" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "DeliveryInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DeliveryInfo_userId_key" ON "DeliveryInfo"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductType_subcategoryId_key" ON "ProductType"("subcategoryId");

-- AddForeignKey
ALTER TABLE "DeliveryInfo" ADD CONSTRAINT "DeliveryInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productTypeId_fkey" FOREIGN KEY ("productTypeId") REFERENCES "ProductType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "productType" TEXT NOT NULL DEFAULT 'default',
ADD COLUMN     "subcategory" TEXT NOT NULL DEFAULT 'default',
ALTER COLUMN "category" SET DEFAULT 'default';

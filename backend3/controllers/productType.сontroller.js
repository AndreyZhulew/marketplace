const { PrismaClient } = require('@prisma/client');
const transliterate = require("../utils/transliteration");

const prisma = new PrismaClient();

class ProductTypeController {
    async getAllProductTypes(req, res) {
        try {
            const productTypes = await prisma.productType.findMany();
            res.json(productTypes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getProductTypeById(req, res) {
        try {
            const productTypeId = parseInt(req.params.id);
            const productType = await prisma.productType.findUnique({
                where: { id: productTypeId },
            });
            res.json(productType);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getProductTypesByAlias(req, res) {
        try {
            const { alias } = req.params;
            const productTypes = await prisma.productType.findMany({
                where: { alias },
            });
            res.json(productTypes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getProductTypesBySubcategoryId(req, res) {
        try {
            const subcategoryId = parseInt(req.params.subcategoryId);
            const productTypes = await prisma.productType.findMany({
                where: { subcategoryId },
            });
            res.json(productTypes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createProductType(req, res) {
        try {
            const { name, image, subcategoryId } = req.body;
            const alias = transliterate(name).replaceAll(' ', '_').toLowerCase() + '_' + subcategoryId
            const newProductType = await prisma.productType.create({
                data: { name, image, alias, subcategoryId },
            });
            res.json(newProductType);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateProductType(req, res) {
        try {
            const productTypeId = parseInt(req.params.id);
            const { name, image, alias, subcategoryId } = req.body;
            const updatedProductType = await prisma.productType.update({
                where: { id: productTypeId },
                data: { name, image, alias, subcategoryId },
            });
            res.json(updatedProductType);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteProductType(req, res) {
        try {
            const productTypeId = parseInt(req.params.id);
            await prisma.productType.delete({
                where: { id: productTypeId },
            });
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ProductTypeController();
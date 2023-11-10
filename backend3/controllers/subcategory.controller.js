const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class SubcategoryController {
    async getAllSubcategories(req, res) {
        try {
            const subcategories = await prisma.subcategory.findMany();
            res.json(subcategories);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getSubcategoryById(req, res) {
        try {
            const subcategoryId = parseInt(req.params.id);
            const subcategory = await prisma.subcategory.findUnique({
                where: { id: subcategoryId },
            });
            res.json(subcategory);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getSubcategoriesByCategoryId(req, res) {
        try {
            const categoryId = parseInt(req.params.categoryId);
            const subcategories = await prisma.subcategory.findMany({
                where: { categoryId },
            });
            res.json(subcategories);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createSubcategory(req, res) {
        try {
            const { name, image, categoryId } = req.body;
            const newSubcategory = await prisma.subcategory.create({
                data: { name, image, categoryId },
            });
            res.json(newSubcategory);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateSubcategory(req, res) {
        try {
            const subcategoryId = parseInt(req.params.id);
            const { name, image, categoryId } = req.body;
            const updatedSubcategory = await prisma.subcategory.update({
                where: { id: subcategoryId },
                data: { name, image, categoryId },
            });
            res.json(updatedSubcategory);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteSubcategory(req, res) {
        try {
            const subcategoryId = parseInt(req.params.id);
            await prisma.subcategory.delete({
                where: { id: subcategoryId },
            });
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new SubcategoryController();
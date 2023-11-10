const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class CategoryController {
    async getAllCategories(req, res) {
        try {
            const categories = await prisma.category.findMany({
                where: {},
                include: {
                    subcategories: {
                        include: {
                            productTypes: true
                        }
                    }
                }
            });
            res.json(categories);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getCategoryById(req, res) {
        try {
            const categoryId = parseInt(req.params.id);
            const category = await prisma.category.findUnique({
                where: { id: categoryId },
            });
            res.json(category);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createCategory(req, res) {
        try {
            const { name, image } = req.body;
            const newCategory = await prisma.category.create({
                data: { name, image },
            });
            res.json(newCategory);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateCategory(req, res) {
        try {
            const categoryId = parseInt(req.params.id);
            const { name, image } = req.body;
            const updatedCategory = await prisma.category.update({
                where: { id: categoryId },
                data: { name, image },
            });
            res.json(updatedCategory);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteCategory(req, res) {
        try {
            const categoryId = parseInt(req.params.id);
            await prisma.category.delete({
                where: { id: categoryId },
            });
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new CategoryController();
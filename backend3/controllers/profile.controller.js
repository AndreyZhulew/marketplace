const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class ProfileController {
    async getMyProfile(req, res) {
        try {
            const productTypes = await prisma.user.findMany();
            res.json(productTypes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ProfileController();
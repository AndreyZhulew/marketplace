const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/profile.controller')
const authMiddleware = require("../middleware/auth.middleware");
const profileController = new ProfileController()

router.get('/', authMiddleware, profileController.getMyProfile)

module.exports = router;
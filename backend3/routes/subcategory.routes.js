const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers/subcategory.controller');
const authMiddleware = require("../middleware/auth.middleware");

router.get('/', subcategoryController.getAllSubcategories);
router.get('/:id', subcategoryController.getSubcategoryById);
router.get('/byCategoryId/:categoryId', subcategoryController.getSubcategoriesByCategoryId);
router.post('/', authMiddleware, subcategoryController.createSubcategory);
router.put('/:id', authMiddleware, subcategoryController.updateSubcategory);
router.delete('/:id', subcategoryController.deleteSubcategory);

module.exports = router;
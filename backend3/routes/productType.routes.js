const express = require('express');
const router = express.Router();
const productTypeController = require('../controllers/productType.сontroller');

router.get('/', productTypeController.getAllProductTypes);
router.get('/:id', productTypeController.getProductTypeById);
router.get('/byAlias/:alias', productTypeController.getProductTypesByAlias);
router.get('/bySubcategoryId/:subcategoryId', productTypeController.getProductTypesBySubcategoryId);
router.post('/', productTypeController.createProductType);
router.put('/:id', productTypeController.updateProductType);
router.delete('/:id', productTypeController.deleteProductType);

module.exports = router;
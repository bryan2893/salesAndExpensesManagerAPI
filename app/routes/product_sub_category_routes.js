let express = require('express');
let productController = require('../controllers/product_sub_category');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/subCategories/getAllSubCategories',productController.getAllSubCategories);
router.get('/subCategories/getSubCategory/:subCategoryCode',productController.getSubCategory);
router.put('/subCategories/createSubCategory',productController.createSubCategory);
router.delete('/subCategories/deleteSubCategory/:subCategoryId',productController.deleteSubCategory);
router.put('/subCategories/updateSubCategory/:subCategoryId',productController.updateSubCategory);
router.get('/subCategories/getSubCategoriesByCategory/:categoryId',productController.getSubCategoriesByCategory);

module.exports = router;
let express = require('express');
let product_category_controller = require('../controllers/product_category');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/product_categories/getAllProductCategories',product_category_controller.getAllProductCategories);//funciona.
router.get('/product_categories/getProductCategory/:categoryId',product_category_controller.getAProductCategory);//funciona.
router.post('/product_categories/saveProductCategory',product_category_controller.saveProductCategory);//funciona.
router.get('/product_categories/deleteProductCategory/:categoryId',product_category_controller.deleteProductCategory);//funciona.
router.post('/product_categories/updateProductCategory',product_category_controller.updateProductCategory);//funciona.

module.exports = router;
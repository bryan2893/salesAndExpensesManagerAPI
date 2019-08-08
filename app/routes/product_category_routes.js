let express = require('express');
let product_category_controller = require('../controllers/product_category');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

router.get('/product_categories/getAllProductCategories',product_category_controller.getAllProductCategories);
router.get('/product_categories/getProductCategory/:categoryCode',product_category_controller.getAProductCategory);
router.post('/product_categories/saveProductCategory',product_category_controller.saveProductCategory);
router.get('/product_categories/deleteProductCategory/:categoryCode',product_category_controller.deleteProductCategory);
router.post('/product_categories/updateProductCategory',product_category_controller.updateProductCategory);

module.exports = router;
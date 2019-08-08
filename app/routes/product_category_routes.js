let express = require('express');
let product_category_controller = require('../controllers/product_category');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

router.get('/product_categories/getAllProductCategories',authMiddleware.ensureAuthenticate,product_category_controller.getAllProductCategories);
router.get('/product_categories/getProductCategory/:categoryCode',authMiddleware.ensureAuthenticate,product_category_controller.getAProductCategory);
router.post('/product_categories/saveProductCategory',authMiddleware.ensureAuthenticate,product_category_controller.saveProductCategory);
router.get('/product_categories/deleteProductCategory/:categoryCode',authMiddleware.ensureAuthenticate,product_category_controller.deleteProductCategory);
router.post('/product_categories/updateProductCategory',authMiddleware.ensureAuthenticate,product_category_controller.updateProductCategory);

module.exports = router;
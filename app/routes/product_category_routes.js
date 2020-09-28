let express = require('express');
let product_category_controller = require('../controllers/product_category');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/product_categories/getAllProductCategories',product_category_controller.getAllProductCategories);
router.get('/product_categories/getProductCategory/:categoryCode',product_category_controller.getProductCategory);
router.put('/product_categories/createProductCategory',product_category_controller.createProductCategory);
router.delete('/product_categories/deleteProductCategory/:categoryCode',product_category_controller.deleteProductCategory);
router.put('/product_categories/updateProductCategory/:categoryCode',product_category_controller.updateProductCategory);

module.exports = router;
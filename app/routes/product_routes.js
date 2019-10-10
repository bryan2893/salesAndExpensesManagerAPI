let express = require('express');
let productController = require('../controllers/product');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/products/getAllProducts',productController.getAllProducts);//funciona
router.get('/products/getProduct/:productId',productController.getAProduct);//funciona
router.post('/products/saveProduct',productController.saveProduct);//funciona
router.get('/products/deleteProduct/:productId',productController.deleteProduct);//funciona.
router.post('/products/updateProduct',productController.updateProduct);//funciona.
router.get('/products/getProductsByCategory/:categoryId',productController.getProductsByCategory);//funciona

module.exports = router;
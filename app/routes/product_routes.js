let express = require('express');
let productController = require('../controllers/product');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/products/getAllProducts',productController.getAllProducts);//funciona.
router.get('/products/getProduct/:productId',productController.getAProduct);//funciona.
router.put('/products/saveProduct',productController.createProduct);//funciona.
router.delete('/products/deleteProduct/:productId',productController.deleteProduct);//funciona.
router.put('/products/updateProduct/:productId',productController.updateProduct);//funciona.
router.get('/products/getByCategory/:categoryId',productController.getProductsByCategory);//funciona.

module.exports = router;
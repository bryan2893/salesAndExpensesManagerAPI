let express = require('express');
let productsController = require('../controllers/product');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/products/getAllProducts',productsController.getAllProducts);
router.get('/products/filterProductsBySubCategory/:subCategoryCode',productsController.filterProductsBySubCategory);
router.get('/products/getProduct/:productCode',productsController.getProduct);
router.put('/products/createProduct',productsController.createProduct);
router.delete('/products/deleteProduct/:productCode',productsController.deleteProduct);
router.put('/products/updateProduct/:productCode',productsController.updateProduct);

module.exports = router;
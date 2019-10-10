let express = require('express');
let productVarietyController = require('../controllers/product_variety');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/product_variety/getAllProductVarieties',productVarietyController.getAllProductVarieties);//funciona
router.get('/product_variety/getProductVariety/:varietyId',productVarietyController.getAProductVariety);//funciona.
router.post('/product_variety/saveProductVariety',productVarietyController.saveProductVariety);//funciona
router.get('/product_variety/deleteProductVariety/:varietyId',productVarietyController.deleteProductVariety);//funciona
router.post('/product_variety/updateProductVariety',productVarietyController.updateProductVariety);//funciona

module.exports = router;
let express = require('express');
let sub_category_product_controller = require('../controllers/sub_category_product');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

router.get('/sub_category_product/getAllsubCategoryProducts',authMiddleware.ensureAuthenticate,sub_category_product_controller.getAllSubCategoryProducts);
router.get('/sub_category_product/getsubCategoryProduct/:subCategoryCode',authMiddleware.ensureAuthenticate,sub_category_product_controller.getASubCategoryProduct);
router.post('/sub_category_product/savesubCategoryProduct',authMiddleware.ensureAuthenticate,sub_category_product_controller.saveSubCategoryProduct);
router.get('/sub_category_product/deletesubCategoryProduct/:subCategoryCode',authMiddleware.ensureAuthenticate,sub_category_product_controller.deleteSubCategoryProduct);
router.post('/sub_category_product/updatesubCategoryProduct',authMiddleware.ensureAuthenticate,sub_category_product_controller.updateSubCategoryProduct);

module.exports = router;
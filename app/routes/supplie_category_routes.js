let express = require('express');
let supplieCategoryController = require('../controllers/supplie_category');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

router.get('/supplie_categories/getAllSupplieCategories',authMiddleware.ensureAuthenticate,supplieCategoryController.getAllSupplieCategories);
router.get('/supplie_categories/getSupplieCategory/:categoryCode',authMiddleware.ensureAuthenticate,supplieCategoryController.getASupplieCategory);
router.post('/supplie_categories/saveSupplieCategory',authMiddleware.ensureAuthenticate,supplieCategoryController.saveSupplieCategory);
router.get('/supplie_categories/deleteSupplieCategory/:categoryCode',authMiddleware.ensureAuthenticate,supplieCategoryController.deleteSupplieCategory);
router.post('/supplie_categories/updateSupplieCategory',authMiddleware.ensureAuthenticate,supplieCategoryController.updateSupplieCategory);

module.exports = router;
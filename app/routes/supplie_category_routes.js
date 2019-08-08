let express = require('express');
let supplieCategoryController = require('../controllers/supplie_category');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

router.get('/supplie_categories/getAllSupplieCategories',supplieCategoryController.getAllSupplieCategories);
router.get('/supplie_categories/getSupplieCategory/:categoryCode',supplieCategoryController.getASupplieCategory);
router.post('/supplie_categories/saveSupplieCategory',supplieCategoryController.saveSupplieCategory);
router.get('/supplie_categories/deleteSupplieCategory/:categoryCode',supplieCategoryController.deleteSupplieCategory);
router.post('/supplie_categories/updateSupplieCategory',supplieCategoryController.updateSupplieCategory);

module.exports = router;
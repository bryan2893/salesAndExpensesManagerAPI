let express = require('express');
let providerController = require('../controllers/provider');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

router.get('/providers/getAllProviders',providerController.getAllProviders);
router.get('/providers/getProvider/:providerCode',providerController.getAProvider);
router.post('/providers/saveProvider',providerController.saveProvider);
router.get('/providers/deleteProvider/:providerCode',providerController.deleteProvider);
router.post('/providers/updateProvider',providerController.updateProvider);

module.exports = router;
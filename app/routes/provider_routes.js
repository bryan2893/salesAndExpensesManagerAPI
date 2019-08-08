let express = require('express');
let providerController = require('../controllers/provider');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

router.get('/providers/getAllProviders',authMiddleware.ensureAuthenticate,providerController.getAllProviders);
router.get('/providers/getProvider/:providerCode',authMiddleware.ensureAuthenticate,providerController.getAProvider);
router.post('/providers/saveProvider',authMiddleware.ensureAuthenticate,providerController.saveProvider);
router.get('/providers/deleteProvider/:providerCode',authMiddleware.ensureAuthenticate,providerController.deleteProvider);
router.post('/providers/updateProvider',authMiddleware.ensureAuthenticate,providerController.updateProvider);

module.exports = router;
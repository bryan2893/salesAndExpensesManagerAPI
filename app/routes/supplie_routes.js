let express = require('express');
let suppliesController = require('../controllers/supplie');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

router.get('/supplies/getAllSupplies',authMiddleware.ensureAuthenticate,suppliesController.getAllSupplies);
router.get('/supplies/getSupplie/:supplieCode',authMiddleware.ensureAuthenticate,suppliesController.getASupplie);
router.post('/supplies/saveSupplie',authMiddleware.ensureAuthenticate,suppliesController.saveSupplie);
router.get('/supplies/deleteSupplie/:supplieCode',authMiddleware.ensureAuthenticate,suppliesController.deleteSupplie);
router.post('/supplies/updateSupplie',authMiddleware.ensureAuthenticate,suppliesController.updateSupplie);

module.exports = router;
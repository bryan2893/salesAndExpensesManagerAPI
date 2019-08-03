let express = require('express');
let suppliesController = require('../controllers/supplie');
let router = express.Router();

router.get('/supplies/getAllSupplies',suppliesController.getAllSupplies);
router.get('/supplies/getSupplie/:supplieCode',suppliesController.getASupplie);
router.post('/supplies/saveSupplie',suppliesController.saveSupplie);
router.get('/supplies/deleteSupplie/:supplieCode',suppliesController.deleteSupplie);
router.post('/supplies/updateSupplie',suppliesController.updateSupplie);

module.exports = router;
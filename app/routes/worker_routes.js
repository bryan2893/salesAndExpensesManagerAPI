let express = require('express');
let workerController = require('../controllers/worker');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/workers/getAllWorkers',workerController.getAllWorkers);
router.get('/workers/getWorker/:workerId',authMiddleware.ensureAuthenticate,workerController.getAWorker);
router.post('/workers/saveWorker',workerController.saveWorker);
router.get('/workers/deleteWorker/:workerId',authMiddleware.ensureAuthenticate,workerController.deleteWorker);
router.post('/workers/updateWorker',authMiddleware.ensureAuthenticate,workerController.updateWorker);

module.exports = router;
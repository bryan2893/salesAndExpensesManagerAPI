let express = require('express');
let workerController = require('../controllers/worker');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

router.get('/workers/getAllWorkers',authMiddleware.ensureAuthenticate,workerController.getAllWorkers);
router.get('/workers/getWorker/:workerId',authMiddleware.ensureAuthenticate,workerController.getAWorker);
router.post('/workers/saveWorker',authMiddleware.ensureAuthenticate,workerController.saveWorker);
router.get('/workers/deleteWorker/:workerId',authMiddleware.ensureAuthenticate,workerController.deleteWorker);
router.post('/workers/updateWorker',authMiddleware.ensureAuthenticate,workerController.updateWorker);

module.exports = router;
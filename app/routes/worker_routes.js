let express = require('express');
let workerController = require('../controllers/worker');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

router.get('/workers/getAllWorkers',workerController.getAllWorkers);
router.get('/workers/getWorker/:workerId',workerController.getAWorker);
router.post('/workers/saveWorker',workerController.saveWorker);
router.get('/workers/deleteWorker/:workerId',workerController.deleteWorker);
router.post('/workers/updateWorker',workerController.updateWorker);

module.exports = router;
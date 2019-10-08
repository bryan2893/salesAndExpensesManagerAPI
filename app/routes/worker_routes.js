let express = require('express');
let workerController = require('../controllers/worker');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/workers/getAllWorkers',workerController.getAllWorkers);//funciona.
router.get('/workers/getWorker/:workerId',workerController.getAWorker);//funciona.
router.post('/workers/saveWorker',workerController.saveWorker);//funciona.
router.get('/workers/deleteWorker/:workerId',workerController.deleteWorker);//funciona.
router.post('/workers/updateWorker',authMiddleware.ensureAuthenticate,workerController.updateWorker);

module.exports = router;
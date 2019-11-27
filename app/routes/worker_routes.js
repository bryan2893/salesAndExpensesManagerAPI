let express = require('express');
let workerController = require('../controllers/worker');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/workers/getAllWorkers',workerController.getAllWorkers);//funciona.
router.get('/workers/getWorker/:workerId',workerController.getAWorker);//funciona.
router.put('/workers/createWorker',workerController.createWorker);//funciona.
router.delete('/workers/deleteWorker/:workerId',workerController.deleteWorker);//funciona.
router.put('/workers/updateWorker/:workerId',workerController.updateWorker);//funciona.

module.exports = router;
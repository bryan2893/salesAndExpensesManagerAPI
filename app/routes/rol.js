let express = require('express');
let rolController = require('../controllers/rol');
let router = express.Router();
//let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/roles/obtener_todos',rolController.obtenerTodosLosRoles);
//router.get('/workers/getWorker/:workerId',workerController.getAWorker);
router.put('/roles/crear_rol',rolController.crearNuevoRol);
//router.delete('/workers/deleteWorker/:workerId',workerController.deleteWorker);
//router.put('/workers/updateWorker/:workerId',workerController.updateWorker);

module.exports = router;
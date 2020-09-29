let express = require('express');
let trabajadorController = require('../controllers/trabajador');
let router = express.Router();
//let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/trabajadores/obtener_todos',trabajadorController.obtenerTodosLosTrabajadores);
//router.get('/workers/getWorker/:workerId',workerController.getAWorker);
router.put('/trabajadores/crear_trabajador',trabajadorController.crearNuevoTrabajador);
//router.delete('/workers/deleteWorker/:workerId',workerController.deleteWorker);
//router.put('/workers/updateWorker/:workerId',workerController.updateWorker);

module.exports = router;
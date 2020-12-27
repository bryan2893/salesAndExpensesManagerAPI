let express = require('express');
let permisoController = require('../controllers/permiso');
let router = express.Router();
//let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/permisos/obtener_permisos/:id_rol',permisoController.obtenerPermisosDeUnRol);
//router.get('/workers/getWorker/:workerId',workerController.getAWorker);
router.put('/permisos/crear_permiso',permisoController.crearPermiso);
//router.delete('/workers/deleteWorker/:workerId',workerController.deleteWorker);
//router.put('/workers/updateWorker/:workerId',workerController.updateWorker);

module.exports = router;
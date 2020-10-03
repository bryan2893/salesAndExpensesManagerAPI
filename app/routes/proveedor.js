let express = require('express');
let proveedorController = require('../controllers/proveedor');
let router = express.Router();
//let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/proveedores/obtener_todos',proveedorController.obtenerTodosLosProveedores);
//router.get('/workers/getWorker/:workerId',workerController.getAWorker);
router.put('/proveedores/crear_proveedor',proveedorController.crearNuevoProveedor);
//router.delete('/workers/deleteWorker/:workerId',workerController.deleteWorker);
//router.put('/workers/updateWorker/:workerId',workerController.updateWorker);

module.exports = router;
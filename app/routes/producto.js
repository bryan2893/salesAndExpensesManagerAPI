let express = require('express');
let productoController = require('../controllers/producto');
let router = express.Router();
//let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/productos/obtener_todos',productoController.obtenerTodosLosProductos);
//router.get('/workers/getWorker/:workerId',workerController.getAWorker);
router.put('/productos/crear_producto',productoController.crearNuevoProducto);
//router.delete('/workers/deleteWorker/:workerId',workerController.deleteWorker);
//router.put('/workers/updateWorker/:workerId',workerController.updateWorker);

module.exports = router;
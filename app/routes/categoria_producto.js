let express = require('express');
let categoriaProductoController = require('../controllers/categoria_producto');
let router = express.Router();
//let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/categorias_producto/obtener_todos',categoriaProductoController.obtenerTodasCategoriasDeProducto);
//router.get('/workers/getWorker/:workerId',workerController.getAWorker);
router.put('/categorias_producto/crear_categoria',categoriaProductoController.crearNuevaCategoriaProducto);
//router.delete('/workers/deleteWorker/:workerId',workerController.deleteWorker);
//router.put('/workers/updateWorker/:workerId',workerController.updateWorker);

module.exports = router;
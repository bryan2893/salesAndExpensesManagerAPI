let express = require('express');
let categoriaMateriaPrimaController = require('../controllers/categoria_materia_prima');
let router = express.Router();
//let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/categorias_materia_prima/obtener_todos',categoriaMateriaPrimaController.obtenerTodasCategoriasMateriaPrima);
//router.get('/workers/getWorker/:workerId',workerController.getAWorker);
router.put('/categorias_materia_prima/crear_categoria_materia_prima',categoriaMateriaPrimaController.crearNuevaCategoriaMateriaPrima);
//router.delete('/workers/deleteWorker/:workerId',workerController.deleteWorker);
//router.put('/workers/updateWorker/:workerId',workerController.updateWorker);

module.exports = router;
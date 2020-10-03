let express = require('express');
let unidadMedidaController = require('../controllers/unidad_medida');
let router = express.Router();
//let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/unidades_medida/obtener_todos',unidadMedidaController.obtenerTodasUnidadesMedida);
//router.get('/workers/getWorker/:workerId',workerController.getAWorker);
router.put('/unidades_medida/crear_unidad_medida',unidadMedidaController.crearNuevaUnidadMedida);
//router.delete('/workers/deleteWorker/:workerId',workerController.deleteWorker);
//router.put('/workers/updateWorker/:workerId',workerController.updateWorker);

module.exports = router;
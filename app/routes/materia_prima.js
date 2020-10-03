let express = require('express');
let materiaPrimaController = require('../controllers/materia_prima');
let router = express.Router();
//let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/materias_prima/obtener_todos',materiaPrimaController.obtenerTodosLasMateriasPrimas);
//router.get('/workers/getWorker/:workerId',workerController.getAWorker);
router.put('/materias_prima/crear_materia_prima',materiaPrimaController.crearNuevaMateriaPrima);
//router.delete('/workers/deleteWorker/:workerId',workerController.deleteWorker);
//router.put('/workers/updateWorker/:workerId',workerController.updateWorker);

module.exports = router;
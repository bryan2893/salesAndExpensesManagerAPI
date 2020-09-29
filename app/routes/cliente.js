let express = require('express');
let clienteController = require('../controllers/cliente');
let router = express.Router();
//let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/clientes/obtener_todos',clienteController.obtenerTodosLosClientes);
//router.get('/workers/getWorker/:workerId',workerController.getAWorker);
router.put('/clientes/crear_cliente',clienteController.crearNuevoCliente);
//router.delete('/workers/deleteWorker/:workerId',workerController.deleteWorker);
//router.put('/workers/updateWorker/:workerId',workerController.updateWorker);

module.exports = router;
let express = require('express');
let facturaCompraController = require('../controllers/factura_compra');
let router = express.Router();
//let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/facturas_compra/obtener_todos',facturaCompraController.obtenerTodasLasFacturasCompra);
//router.get('/workers/getWorker/:workerId',workerController.getAWorker);
router.put('/facturas_compra/crear_factura_compra',facturaCompraController.crearNuevaFacturaCompra);
//router.delete('/workers/deleteWorker/:workerId',workerController.deleteWorker);
//router.put('/workers/updateWorker/:workerId',workerController.updateWorker);

module.exports = router;
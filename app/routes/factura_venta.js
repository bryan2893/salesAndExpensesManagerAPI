let express = require('express');
let facturaVentaController = require('../controllers/factura_venta');
let router = express.Router();
//let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/facturas_venta/obtener_todos',facturaVentaController.obtenerTodasLasFacturasVenta);
//router.get('/workers/getWorker/:workerId',workerController.getAWorker);
router.put('/facturas_venta/crear_factura_venta',facturaVentaController.crearNuevaFacturaVenta);
//router.delete('/workers/deleteWorker/:workerId',workerController.deleteWorker);
//router.put('/workers/updateWorker/:workerId',workerController.updateWorker);

module.exports = router;
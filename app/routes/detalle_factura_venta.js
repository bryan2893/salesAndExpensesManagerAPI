let express = require('express');
let detalleFacturaVentaController = require('../controllers/detalle_factura_venta');
let router = express.Router();
//let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/factura_ventas/obtener_todas',detalleFacturaVentaController.obtenerTodosLosDetallesFacturaVenta);
//router.get('/workers/getWorker/:workerId',workerController.getAWorker);
router.put('/factura_ventas/crear_trabajador',detalleFacturaVentaController.crearNuevoDetalleFacturaVenta);
//router.delete('/workers/deleteWorker/:workerId',workerController.deleteWorker);
//router.put('/workers/updateWorker/:workerId',workerController.updateWorker);

module.exports = router;
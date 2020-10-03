let express = require('express');
let detalleFacturaCompraController = require('../controllers/detalle_factura_compra');
let router = express.Router();
//let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/factura_compras/obtener_todas',detalleFacturaCompraController.obtenerTodosLosDetallesFacturaCompra);
//router.get('/workers/getWorker/:workerId',workerController.getAWorker);
router.put('/factura_compras/crear_factura_compra',detalleFacturaCompraController.crearNuevoDetalleFacturaCompra);
//router.delete('/workers/deleteWorker/:workerId',workerController.deleteWorker);
//router.put('/workers/updateWorker/:workerId',workerController.updateWorker);

module.exports = router;
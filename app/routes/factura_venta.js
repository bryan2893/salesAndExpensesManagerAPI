let express = require('express');
let facturaVentaController = require('../controllers/factura_venta');
let router = express.Router();
//let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/facturas_venta/obtener_pagina/:numero_pagina/:tamano_pagina',facturaVentaController.obtenerPaginaFacturasVenta);
router.get('/facturas_venta/obtener_factura/:numero_factura',facturaVentaController.obtenerFacturaVenta);
router.put('/facturas_venta/crear_factura_venta',facturaVentaController.crearNuevaFacturaVenta);
router.delete('/facturas_venta/eliminar_factura/:numero_factura',facturaVentaController.eliminarFacturaVenta);
router.get('/facturas_venta/contar_facturas',facturaVentaController.obtenerCantidadFacturas);
//router.put('/facturas_venta/actualizar_factura/:numero_factura',facturaVentaController.actualizarFacturaVenta);

module.exports = router;
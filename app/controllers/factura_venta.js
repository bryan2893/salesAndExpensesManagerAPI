const modeloFacturaVenta = require('../models/factura_venta');
const modeloDetalleFacturaVenta = require('../models/detalle_factura_venta');
let db = require('../database/database');

exports.obtenerTodasLasFacturasVenta = function(req,res){

    modeloFacturaVenta.findAll().then((facturasVenta) => {
        res.status(200).send({status:200,facturasVenta:facturasVenta});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });

};

exports.crearNuevaFacturaVenta = function(req,res){

    const {encabezado_factura,detalles_factura} = req.body;

    db.transaction(t => {
        return modeloFacturaVenta.create(encabezado_factura, {transaction: t}).then(facturaVentaCreada => {
            detalles_factura.forEach(detalle => {
                detalle.numero_factura = facturaVentaCreada.numero_factura;
            });
            return modeloDetalleFacturaVenta.bulkCreate(detalles_factura,{transaction:t,returning:true});
        });
      }).then((detallesInsertados) => {
        // Transaction has been committed
        // result is whatever the result of the promise chain returned to the transaction callback
        res.status(200).send({status:200,respuesta:{encabezadoFactura,detallesFactura:detallesInsertados}});
      }).catch(err => {
        // Transaction has been rolled back
        // err is whatever rejected the promise chain returned to the transaction callback
        res.status(400).send({status:400,message:err.message});
      });
};
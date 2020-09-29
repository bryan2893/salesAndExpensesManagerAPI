const modeloDetalleFacturaVenta = require('../models/detalle_factura_venta');

exports.obtenerTodosLosDetallesFacturaVenta = function(req,res){

    modeloDetalleFacturaVenta.findAll().then((facturasVenta) => {
        res.status(200).send({status:200,facturasVenta:facturasVenta});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });

};

exports.crearNuevoDetalleFacturaVenta = function(req,res){

    const informacionFacturaVenta = req.body;

    modeloDetalleFacturaVenta.create(informacionFacturaVenta).then((facturaVentaCreada) => {
        res.status(200).send({status:200,trabajador:facturaVentaCreada});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });
    
};
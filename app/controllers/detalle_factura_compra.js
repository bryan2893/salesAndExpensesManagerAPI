const modeloDetalleFacturaCompra = require('../models/detalle_factura_compra');

exports.obtenerTodosLosDetallesFacturaCompra = function(req,res){

    modeloDetalleFacturaCompra.findAll().then((detallesFacturaCompra) => {
        res.status(200).send({status:200,detalleFacturaCompra:detallesFacturaCompra});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });

};

exports.crearNuevoDetalleFacturaCompra = function(req,res){

    const informacionDetalleFacturaCompra = req.body;

    modeloDetalleFacturaCompra.create(informacionDetalleFacturaCompra).then((detalleFacturaCompraCreada) => {
        res.status(200).send({status:200,detalleFacturaCompra:detalleFacturaCompraCreada});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });
    
};
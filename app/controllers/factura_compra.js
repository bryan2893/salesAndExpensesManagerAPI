const modeloFacturaCompra = require('../models/factura_compra');

exports.obtenerTodasLasFacturasCompra = function(req,res){

    modeloFacturaCompra.findAll().then((facturasCompra) => {
        res.status(200).send({status:200,facturasCompra:facturasCompra});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });

};

exports.crearNuevaFacturaCompra = function(req,res){

    const informacionFacturaCompra = req.body;

    modeloFacturaCompra.create(informacionFacturaCompra).then((facturaCompraCreada) => {
        res.status(200).send({status:200,facturaCompra:facturaCompraCreada});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });
    
};
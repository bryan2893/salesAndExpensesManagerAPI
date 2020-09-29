const modeloFacturaVenta = require('../models/factura_venta');

exports.obtenerTodasLasFacturasVenta = function(req,res){

    modeloFacturaVenta.findAll().then((facturasVenta) => {
        res.status(200).send({status:200,facturasVenta:facturasVenta});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });

};

exports.crearNuevaFacturaVenta = function(req,res){

    const informacionFacturaVenta = req.body;

    modeloFacturaVenta.create(informacionFacturaVenta).then((facturaVentaCreada) => {
        res.status(200).send({status:200,facturaVenta:facturaVentaCreada});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });
    
};
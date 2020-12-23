const modeloFacturaVenta = require('../models/factura_venta');
const modeloDetalleFacturaVenta = require('../models/detalle_factura_venta');
let db = require('../database/database');
const sequelize = require('sequelize');

exports.obtenerCantidadFacturas = function(req,res){

    modeloFacturaVenta.findAll({   
        attributes: [[sequelize.fn('COUNT', sequelize.col('numero_factura')), 'cantidad_facturas']]
    }).then((response) => {
        let respuesta = response.pop();
        res.status(200).send({status:200,cantidad_facturas:Number(respuesta.dataValues.cantidad_facturas)});
    }).catch((error) => {
        res.status(400).send({status:400,message:error.message});
    });
};

exports.obtenerPaginaFacturasVenta = function(req,res){

    
    const num_pagina = Number(req.params.numero_pagina);
    const tamaño_pagina = Number(req.params.tamano_pagina);
    let salto = (num_pagina - 1) * tamaño_pagina;
    res.status(200).send({status:200,mensaje:num_pagina+tamaño_pagina+salto});
    /*
    modeloFacturaVenta.findAll({offset:salto,limit:tamaño_pagina}).then((facturasVenta) => {
        res.status(200).send({status:200,facturasVenta:facturasVenta});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });
    */
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

exports.eliminarFacturaVenta = function(req,res){

    const numero_factura = req.params.numero_factura;

    modeloFacturaVenta.destroy({
        where: {
            numero_factura: numero_factura
        }
      }).then((response) => {
            res.status(200).send({status:200,registros_eliminados:response});
    }).catch((error)=>{
            res.status(400).send({status:400,message:error.message});
    });
    
};

exports.obtenerFacturaVenta = function(req,res){
    const numero_factura = req.params.numero_factura;
    let facturaCompleta = {};
    modeloFacturaVenta.findByPk(numero_factura).then((facturaVenta) => {
        facturaCompleta.encabezado = facturaVenta;
        facturaVenta.getDetalles().then((detalles)=>{
            facturaCompleta.detalles = detalles;
            res.status(200).send({status:200,facturaVenta:facturaCompleta});
        }).catch((error)=>{
            res.status(400).send({status:400,message:error.message});
        });
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });
};
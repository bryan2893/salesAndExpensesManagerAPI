//Controladores de lo que tenga que ver con las comidas registradas en la base de datos.
let salesInvoiceModel = require('../models/sales_invoice');
let SALE_INVOICE = require('../models/DTO/sales_invoice');

exports.getAllSalesInvoice = function(req,res){

    salesInvoiceModel.getAllSalesInvoice().then((results)=>{
        res.status(200).json(results);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.getASaleInvoice = function(req,res){
    let num_factura = req.params.num_factura;
    
    salesInvoiceModel.getSaleInvoice(num_factura).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.saveSaleInvoice = function(req,res){
    let bodyData = req.body;
    //el atributo detalles es un arreglo de objetos JSON los cuales representan las filas o detalles de una factura.
    var detalles_factura = null;
    try{
        detalles_factura = JSON.stringify(bodyData.detalles_factura);
    }catch(error){
        return res.status(401).send({message:error.message});
    }

    let saleInvoiceDTO = new SALE_INVOICE(null,bodyData.cedula_emisor,bodyData.fecha,bodyData.nombre_cliente,detalles_factura);

    salesInvoiceModel.saveSaleInvoice(saleInvoiceDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.deleteSaleInvoice = function(req,res){
    let num_factura = req.params.num_factura;
    if(num_factura){
        salesInvoiceModel.deleteSaleInvoice(num_factura).then((result)=>{
            res.status(200).send(result);
        }).catch((error)=>{
            res.status(401).send({message:error.message});
        });
    }else{
        res.status(401).send({message:"El numero de factura es requerido para realizar la consulta!"});
    }
};
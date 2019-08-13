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

    let cedula_emisor = req.worker.sub;

    let bodyData = req.body;
    //el atributo detalles es un arreglo de objetos JSON los cuales representan las filas o detalles de una factura.
    var detalles_factura = null;
    try{
        detalles_factura = JSON.stringify(bodyData.detalles_factura);
    }catch(error){
        return res.status(401).send({message:error.message});
    }

    let saleInvoiceDTO = new SALE_INVOICE(null,cedula_emisor,bodyData.fecha,bodyData.nombre_cliente,bodyData.detalles_extra,bodyData.para_llevar,bodyData.estado,bodyData.id_cliente,detalles_factura);

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

exports.getSalesInvoiceByPagination = function(req,res){
    let page_request = null;
    let limit = null;

    try{
        page_request = parseInt(req.params.page_request);
        limit = parseInt(req.params.limit);
    }catch(error){
        return res.status(401).send({message:error.message});
    }

    if(page_request && limit){
        salesInvoiceModel.getAllSalesInvoiceByPagination(page_request,limit).then((result)=>{
            res.status(200).send(result);
        }).catch((error)=>{
            res.status(401).send({message:error.message});
        });
    }else{
        res.status(401).send({message:"Se necesita el numero de pagina y el limite por pagina para realizar la consulta!"});
    }
};

exports.getAllSalesInvoiceByDateRangeAndPagination = function(req,res){
    let date_from = null;
    let date_to = null;
    let page_request = null;
    let limit = null;

    try{
        page_request = parseInt(req.params.page_request);
        limit = parseInt(req.params.limit);
    }catch(error){
        return res.status(401).send({message:error.message});
    }

    date_from = req.params.date_from;
    date_to = req.params.date_to;

    if(date_from && date_to){
        salesInvoiceModel.getAllSalesInvoiceByDateRangeAndPagination(date_from,date_to,page_request,limit).then((result)=>{
            res.status(200).send(result);
        }).catch((error)=>{
            res.status(401).send({message:error.message});
        });
    }else{
        res.status(401).send({message:"Por favor enviar los parámetros necesarios para la consulta"});
    }
};

exports.getAllSalesInvoiceByEmisorAndPagination = function(req,res){
    //emisor_id,pageRequest,limit
    let emisor_id = req.params.emisor_id;
    let page_request = null;
    let limit = null;

    if(!emisor_id){
        res.status(401).send({message:"Es necesario la cedula del trabajador para realizar la consulta!"});
    }

    try{
        page_request = parseInt(req.params.page_request);
        limit = parseInt(req.params.limit);
    }catch(error){
        return res.status(401).send({message:error.message});
    }

    salesInvoiceModel.getAllSalesInvoiceByEmisorAndPagination(emisor_id,page_request,limit).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.getAllSalesInvoiceByEmisorDateRangeAndPagination = function(req,res){
    let emisor_id = req.params.emisor_id;

    if(!emisor_id){
        return res.status(401).send({message:"Es necesario la cedula del trabajador para realizar la consulta!"});
    }

    let page_request = null;
    let limit = null;

    try{
        page_request = parseInt(req.params.page_request);
        limit = parseInt(req.params.limit);
    }catch(error){
        return res.status(401).send({message:error.message});
    }

    let dateFrom = req.params.date_from;
    let dateTo = req.params.date_to;

    salesInvoiceModel.getAllSalesInvoiceByEmisorDateRangeAndPagination(emisor_id,dateFrom,dateTo,page_request,limit).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.getSalesInvoiceByState = function(req,res){
    let estado = req.params.state;
    
    salesInvoiceModel.getSalesInvoiceByState(estado).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.getSalesInvoiceByStateAndPaginate = function(req,res){
    let estado = req.params.state;

    if(!estado){
        return res.status(401).send({message:"Es necesario el parámetro estado!"});
    }

    let page_request = null;
    let limit = null;

    try{
        page_request = parseInt(req.params.page_request);
        limit = parseInt(req.params.limit);
    }catch(error){
        return res.status(401).send({message:error.message});
    }

    salesInvoiceModel.getSalesInvoiceByStateAndPaginate(estado,page_request,limit).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });


}

exports.getSalesInvoiceByStateDateRangeAndPaginate = function(req,res){
    let state = req.params.state;

    if(!state){
        return res.status(401).send({message:"Es necesario el parametro estado!"});
    }

    let page_request = null;
    let limit = null;

    try{
        page_request = parseInt(req.params.page_request);
        limit = parseInt(req.params.limit);
    }catch(error){
        return res.status(401).send({message:error.message});
    }

    let dateFrom = req.params.date_from;
    let dateTo = req.params.date_to;

    if(dateFrom && dateTo){
        salesInvoiceModel.getSalesInvoiceByStateDateRangeAndPaginate(state,dateFrom,dateTo,page_request,limit).then((result)=>{
            res.status(200).send(result);
        }).catch((error)=>{
            res.status(401).send({message:error.message});
        });
    }
};

exports.updateSaleInvoiceState = function(req,res){
    let state = req.params.state;
    let num_factura = req.params.num_factura;

    if(!state || !num_factura){
        return res.status(401).send({message:"Es necesario el parametro 'estado' y el parametro 'num_factura' !"});
    }

    salesInvoiceModel.updateSaleInvoiceState(state,num_factura).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
    
};
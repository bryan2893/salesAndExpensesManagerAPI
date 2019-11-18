//Controladores de lo que tenga que ver con las comidas registradas en la base de datos.
let salesInvoiceModel = require('../models/sale_invoice');
let SALE_INVOICE = require('../models/DTO/sale_invoice');

exports.getAllSalesInvoice = function(req,res){

    salesInvoiceModel.getAllSalesInvoice().then((results)=>{
        res.status(200).json(results);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });

};

exports.getASaleInvoice = function(req,res){
    let invoiceNumber = req.params.invoiceNumber;
    
    salesInvoiceModel.getSaleInvoice(invoiceNumber).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.saveSaleInvoice = function(req,res){

    //let workerId = req.worker.sub;

    let bodyData = req.body;
    //el atributo detalles es un arreglo de objetos JSON los cuales representan las filas o detalles de una factura.
    var invoiceDetails = null;
    try{
        invoiceDetails = JSON.stringify(bodyData.invoiceDetails);
    }catch(error){
        return res.status(401).send({message:error.message});
    }
    let saleInvoiceDTO = new SALE_INVOICE(null,bodyData.workerId,null,bodyData.toCarryOut,bodyData.pending,bodyData.clientId,bodyData.clientName,invoiceDetails);

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
        res.status(401).send({message:"page_request and limit params are needed!"});
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
    let workerId = req.params.workerId;
    let page_request = null;
    let limit = null;

    if(!workerId){
        res.status(401).send({message:"workerId is necesary!"});
    }

    try{
        page_request = parseInt(req.params.page_request);
        limit = parseInt(req.params.limit);
    }catch(error){
        return res.status(401).send({message:error.message});
    }

    salesInvoiceModel.getAllSalesInvoiceByEmisorAndPagination(workerId,page_request,limit).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });

};

exports.getAllSalesInvoiceByEmisorDateRangeAndPagination = function(req,res){
    let workerId = req.params.workerId;
    if(!workerId){
        return res.status(401).send({message:"workerId is necesary!"});
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

    salesInvoiceModel.getAllSalesInvoiceByEmisorDateRangeAndPagination(workerId,dateFrom,dateTo,page_request,limit).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.getSalesInvoiceByState = function(req,res){
    let state = req.params.state;
    
    salesInvoiceModel.getSalesInvoiceByState(state).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });  
};

exports.countInvoices = function(req,res){
    
    salesInvoiceModel.countInvoices().then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });  
};

exports.getSalesInvoiceByStateAndPaginate = function(req,res){
    let state = req.params.state;

    if(!state){
        return res.status(401).send({message:"state param is necesary!"});
    }

    let page_request = null;
    let limit = null;

    try{
        page_request = parseInt(req.params.page_request);
        limit = parseInt(req.params.limit);
    }catch(error){
        return res.status(401).send({message:error.message});
    }

    salesInvoiceModel.getSalesInvoiceByStateAndPaginate(state,page_request,limit).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });


}

exports.getSalesInvoiceByStateDateRangeAndPaginate = function(req,res){
    let state = req.params.state;

    if(!state){
        return res.status(401).send({message:"state param is necesary!"});
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
    let newState = req.params.newState;
    let invoiceNumber = req.params.invoiceNumber;

    if(!newState || !invoiceNumber){
        return res.status(401).send({message:"param state and invoiceNumber are needed!"});
    }

    salesInvoiceModel.updateSaleInvoiceState(newState,invoiceNumber).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });

};

exports.getSalesInvoiceByClientDateRangeAndPaginate = function(req,res){
    let clientId = req.params.clientId;

    if(!clientId){
        return res.status(401).send({message:"clientId is required!"});
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
        salesInvoiceModel.getSalesInvoiceByClientDateRangeAndPaginate(clientId,dateFrom,dateTo,page_request,limit).then((result)=>{
            res.status(200).send(result);
        }).catch((error)=>{
            res.status(401).send({message:error.message});
        });
    }else{
        res.status(401).send({message:"There is a problem with sended dates!"});
    }
};
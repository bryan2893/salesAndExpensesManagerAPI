//Controladores de lo que tenga que ver con las comidas registradas en la base de datos.
let invoiceDetailsModel = require('../models/invoice_detail');

exports.getInvoiceDetails = function(req,res){
    let num_factura = req.params.num_factura;

    invoiceDetailsModel.getInvoiceDetails(num_factura).then((results)=>{
        res.status(200).json(results);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};
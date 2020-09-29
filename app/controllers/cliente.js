const modeloCliente = require('../models/cliente');

exports.obtenerTodosLosClientes = function(req,res){

    modeloCliente.findAll().then((clientes) => {
        res.status(200).send({status:200,clientes:clientes});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });

};

exports.crearNuevoCliente = function(req,res){

    const informacionCliente = req.body;

    modeloCliente.create(informacionCliente).then((clienteCreado) => {
        res.status(200).send({status:200,cliente:clienteCreado});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });
    
};
let clientModel = require('../models/client');
let CLIENT = require('../models/DTO/client');

exports.getAllClients = function(req,res){

    clientModel.getAllClients().then((results)=>{
        res.status(200).json(results);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.getClientByIdentifier = function(req,res){

    let id = req.params.clientIdentifier;
    
    clientModel.getClientByIdentifier(id).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
    
};

exports.saveClient = function(req,res){
    let bodyData = req.body;
    let clientDTO = new CLIENT(bodyData.identificacion,bodyData.nombre_completo,bodyData.telefono);

    clientModel.saveClient(clientDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });

};

exports.deleteClient = function(req,res){
    let id = req.params.clientId;
    if(id){
        clientModel.deleteClient(id).then((result)=>{
            res.status(200).send(result);
        }).catch((error)=>{
            res.status(401).send({message:error.message});
        });
    }else{
        res.status(401).send({message:"Se necesita el id del cliente para eliminarlo!"});
    }
};

exports.updateClient = function(req,res){
    let bodyData = req.body;
    let clientDTO = new CLIENT(bodyData.identificacion,bodyData.nombre_completo,bodyData.telefono);

    clientModel.updateClient(clientDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};
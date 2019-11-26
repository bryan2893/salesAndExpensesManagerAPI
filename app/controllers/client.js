let clientModel = require('../models/client');

exports.getAllClients = function(req,res){
    clientModel.getAllClients().then((clients)=>{
        res.status(200).send(clients);
    }).catch((error) => {
        res.status(400).send({status:400,message:"Error: "+error.message});
    });
};


exports.getClientById = function(req,res){

    let id = req.params.clientId;
    if(id){
        clientModel.getClientById(id).then((client)=>{
            if(client){
                return res.status(200).send({status:200,client:client});
            }else{
                return res.status(400).send({status:200,message:"Cliente no encontrado."});
            }
        }).catch((error)=>{
            return res.status(400).send({status:400,message:"Error: "+error.message});
        });
    }else{
        return res.status(400).send({status:400,message:"Id de cliente es requerido."});
    }

};

exports.deleteClient = function(req,res){
    let id = req.params.clientId;
    if(id){
        clientModel.getClientById(id).then((client) => {
            if(client){
                clientModel.deleteClient(id).then((result)=>{
                    if(result){
                        res.status(200).send({status:200,result:result});
                    }else{
                        res.status(400).send({status:400,message:"Accion ejecutada pero no hubieron cambios."});
                    }
                }).catch((error)=>{
                    res.status(400).send({status:400,message:"Error: "+error.message});
                });
            }else{
                res.status(400).send({status:400,message:"Cliente no encontrado."});
            }
        });
    }else{
        res.status(400).send({status:400,message:"Cédula de cliente es requerido."});
    }
};

exports.createClient = function(req,res){
    let bodyData = req.body;

    if(bodyData){
        clientModel.createClient(bodyData).then((result)=>{
            res.status(200).send({status:200,client:result});
        }).catch((error)=>{
            res.status(400).send({status:400,message:error.message});
        });
    }else{
        res.status(400).send({status:400,message:"Datos del cliente son necesarios."});
    }
};


exports.updateClient = function(req,res){
    let id = req.params.clientId;
    let newClientInfo = req.body;
    if(id){
        //find if Client exist...
        clientModel.getClientById(id).then((client) => {
            if(client){
                clientModel.updateClient(id,newClientInfo).then((result)=>{
                    if(result[0]){
                        res.status(200).send({status:200,result:result[0]});
                    }else{
                        res.status(400).send({status:400,message:"Accion ejecutada pero no se hicieron cambios."});
                    }
                }).catch((error)=>{
                    res.send(400,{status:400,message:error.message});
                });    
            }else{
                res.send(400,{status:400,message:"Cliente no encontrado."});
            }
        }).catch((error) => {
            res.send(400,{status:400,message:error.message});
        });
    }else{
        res.send(400,{status:400,message:"Se requiere el identificador de cliente"});
    }
};
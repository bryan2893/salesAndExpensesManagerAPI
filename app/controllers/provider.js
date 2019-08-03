let providerModel = require('../models/provider');
let PROVIDER = require('../models/DTO/provider');

exports.getAllProviders = function(req,res){

    providerModel.getAllProviders().then((results)=>{
        res.status(200).json(results);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.getAProvider = function(req,res){
    let code = req.params.providerCode;
    
    providerModel.getProvider(code).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });

};

exports.saveProvider = function(req,res){
    /*bodyData only carry nombre and telefono , codigo is generated ramdonly*/
    let bodyData = req.body;
    let providerDTO = new PROVIDER(null,bodyData.nombre,bodyData.telefono);

    providerModel.saveProvider(providerDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });

};

exports.deleteProvider = function(req,res){
    let code = req.params.providerCode;
    if(code){
        providerModel.deleteProvider(code).then((result)=>{
            res.status(200).send(result);
        }).catch((error)=>{
            res.status(401).send({message:error.message});
        });
    }else{
        res.status(401).send({message:"Se necesita el codigo del proveedor para eliminarlo!"});
    }
};

exports.updateProvider = function(req,res){
    let bodyData = req.body;
    let providerDTO = new PROVIDER(bodyData.codigo,bodyData.nombre,bodyData.telefono);

    providerModel.updateProvider(providerDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};
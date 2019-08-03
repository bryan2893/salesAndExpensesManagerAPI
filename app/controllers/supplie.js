let supplieModel = require('../models/supplie');
let SUPPLIE = require('../models/DTO/supplie');

exports.getAllSupplies = function(req,res){

    supplieModel.getAllSupplies().then((results)=>{
        res.status(200).send(results);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.getASupplie = function(req,res){
    let code = req.params.supplieCode;
    
    supplieModel.getSupplie(code).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.saveSupplie = function(req,res){
    let bodyData = req.body;
    let supplieDTO = new SUPPLIE(null,bodyData.nombre,bodyData.unidad_medida,bodyData.categoria);

    supplieModel.saveSupplie(supplieDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });

};

exports.deleteSupplie = function(req,res){
    let code = req.params.supplieCode;
    if(code){
        supplieModel.deleteSupplie(code).then((result)=>{
            res.status(200).send(result);
        }).catch((error)=>{
            res.status(401).send({message:error.message});
        });
    }else{
        res.status(401).send({message:"Se necesita el codigo del insumo para eliminarlo!"});
    }
};

exports.updateSupplie = function(req,res){
    let bodyData = req.body;
    let supplieDTO = new SUPPLIE(bodyData.codigo,bodyData.nombre,bodyData.unidad_medida,bodyData.categoria);

    supplieModel.updateSupplie(supplieDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};
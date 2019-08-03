let supplieCategoryModel = require('../models/supplie_category');
let SUPPLIE_CATEGORY = require('../models/DTO/supplie_category');

exports.getAllSupplieCategories = function(req,res){

    supplieCategoryModel.getAllSupplieCategories().then((results)=>{
        res.status(200).json(results);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });

};

exports.getASupplieCategory = function(req,res){
    let code = req.params.categoryCode;
    
    supplieCategoryModel.getSupplieCategory(code).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.saveSupplieCategory = function(req,res){
    let bodyData = req.body;
    let supplieCategoryDTO = new SUPPLIE_CATEGORY(null,bodyData.nombre);

    supplieCategoryModel.saveSupplieCategory(supplieCategoryDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.deleteSupplieCategory = function(req,res){
    let code = req.params.categoryCode;
    if(code){
        supplieCategoryModel.deleteSupplieCategorie(code).then((result)=>{
            res.status(200).send(result);
        }).catch((error)=>{
            res.status(401).send({message:error.message});
        });
    }else{
        res.status(401).send({message:"Codigo de categoria necesario para la consulta!"});
    }
};

exports.updateSupplieCategory = function(req,res){
    let bodyData = req.body;
    let supplieCategoryDTO = new SUPPLIE_CATEGORY(bodyData.codigo,bodyData.nombre);

    supplieCategoryModel.updateSupplieCategory(supplieCategoryDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};
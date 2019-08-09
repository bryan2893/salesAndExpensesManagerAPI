let subCategoryProductModel = require('../models/sub_category_product');
let SUB_CATEGORY_PRODUCT = require('../models/DTO/sub_category_productDTO');

exports.getAllSubCategoryProducts = function(req,res){

    subCategoryProductModel.getAllSubCategoryProducts().then((results)=>{
        res.status(200).json(results);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });

};

exports.getASubCategoryProduct = function(req,res){
    let code = req.params.subCategoryCode;
    
    subCategoryProductModel.getSubCategoryProduct(code).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.saveSubCategoryProduct = function(req,res){
    let bodyData = req.body;
    let subCategoryProductDTO = new SUB_CATEGORY_PRODUCT(null,bodyData.nombre);

    subCategoryProductModel.saveSubCategoryProduct(subCategoryProductDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.deleteSubCategoryProduct = function(req,res){
    let code = req.params.subCategoryCode;
    if(code){
        subCategoryProductModel.deleteSubCategoryProduct(code).then((result)=>{
            res.status(200).send(result);
        }).catch((error)=>{
            res.status(401).send({message:error.message});
        });
    }else{
        res.status(401).send({message:"Codigo de sub categoria requerido para la consulta!"});
    }
};

exports.updateSubCategoryProduct = function(req,res){
    let reqBody = req.body;
    let subCategoryProductDTO = new SUB_CATEGORY_PRODUCT(reqBody.codigo,reqBody.nombre);

    subCategoryProductModel.updateSubCategoryProduct(subCategoryProductDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};
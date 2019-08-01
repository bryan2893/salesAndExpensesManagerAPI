let productCategoryModel = require('../models/product_category');
let PRODUCT_CATEGORY = require('../models/DTO/product_category');

exports.getAllProductCategories = function(req,res){

    productCategoryModel.getAllProductCategories().then((results)=>{
        res.status(200).json(results);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });

};

exports.getAProductCategory = function(req,res){
    let code = req.params.categoryCode;
    
    productCategoryModel.getProductCategory(code).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.saveProductCategory = function(req,res){
    let bodyData = req.body;
    let productCategoryDTO = new PRODUCT_CATEGORY(bodyData.codigo,bodyData.nombre);

    productCategoryModel.saveProductCategory(productCategoryDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.deleteProductCategory = function(req,res){
    let code = req.params.categoryCode;
    if(code){
        productCategoryModel.deleteProductCategory(code).then((result)=>{
            res.status(200).send(result);
        }).catch((error)=>{
            res.status(401).send({message:error.message});
        });
    }else{
        res.status(401).send({message:error.message});
    }
};

exports.updateProductCategory = function(req,res){
    let reqBody = req.body;
    let productCategoryDTO = new PRODUCT_CATEGORY(reqBody.codigo,reqBody.nombre);

    productCategoryModel.updateProductCategory(productCategoryDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};
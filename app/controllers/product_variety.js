let productVarietyModel = require('../models/product_variety');
let PRODUCTVARIETY = require('../models/DTO/product_variety');

exports.getAllProductVarieties = function(req,res){

    productVarietyModel.getAllProductVarieties().then((results)=>{
        res.status(200).json(results);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });

};

exports.getAProductVariety = function(req,res){
    let varietyId = req.params.varietyId;
    
    productVarietyModel.getProductVariety(varietyId).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.getProductVarietiesOfAproduct = function(req,res){
    let productId = req.params.productId;

    productVarietyModel.getProductVarietiesOfAproduct(productId).then((results)=>{
        res.status(200).json(results);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
    
};

exports.saveProductVariety = function(req,res){
    let bodyData = req.body;
    let productVarietyDTO = new PRODUCTVARIETY(null,bodyData.productId,bodyData.name,bodyData.price);

    productVarietyModel.saveProductVariety(productVarietyDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.deleteProductVariety = function(req,res){
    let varietyId = req.params.varietyId;
    if(varietyId){
        productVarietyModel.deleteProductVariety(varietyId).then((result)=>{
            res.status(200).send(result);
        }).catch((error)=>{
            res.status(401).send({message:error.message});
        });
    }else{
        res.status(401).send({message:"varietyId is required!"});
    }
};

exports.updateProductVariety = function(req,res){
    let reqBody = req.body;
    let productVarietyDTO = new PRODUCTVARIETY(reqBody.varietyId,reqBody.productId,reqBody.name,reqBody.price);

    productVarietyModel.updateProductVariety(productVarietyDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};
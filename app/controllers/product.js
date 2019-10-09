//Controladores de lo que tenga que ver con las comidas registradas en la base de datos.
let productModel = require('../models/product');
let PRODUCT = require('../models/DTO/product');

exports.getAllProducts = function(req,res){

    productModel.getAllFoods().then((results)=>{
        res.status(200).json(results);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.getAProduct = function(req,res){
    let id = req.params.productId;
    
    productModel.getProduct(id).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.saveProduct = function(req,res){
    let bodyData = req.body;
    let productDTO = new PRODUCT(null,bodyData.name,bodyData.category);

    productModel.saveProduct(productDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.deleteProduct = function(req,res){
    let id = req.params.productId;
    if(id){
        productModel.deleteProduct(id).then((result)=>{
            res.status(200).send(result);
        }).catch((error)=>{
            res.status(401).send({message:error.message});
        });
    }else{
        res.status(401).send({message:"productId is needed!"});
    }
};

exports.updateProduct = function(req,res){
    let reqBody = req.body;
    let productDTO = new PRODUCT(reqBody.productCode,reqBody.name,reqBody.category);

    productModel.updateProduct(productDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });

};

exports.getProductsByCategory = function(req,res){
    let categoryId = req.params.categoryId;

    productModel.getProductsByCategory(categoryId).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};
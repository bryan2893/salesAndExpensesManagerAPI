let productCategoryModel = require('../models/product_category');

exports.getAllProductCategories = function(req,res){

    productCategoryModel.getAllProductCategories().then((productCategories)=>{
        res.status(200).send(productCategories);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });

};

exports.getProductCategory = function(req,res){
    let id = req.params.categoryCode;
    if(id){
        productCategoryModel.getProductCategory(id).then((productCategory)=>{
            if(productCategory){
                return res.status(200).send({status:200,category:productCategory});
            }else{
                return res.status(400).send({status:400,message:"No se encontró la categoría"});
            }
        }).catch((error)=>{
            return res.status(400).send({status:400,message:"Error: "+error.message});
        });
    }else{
        return res.status(400).send({status:400,message:"Id de categoría es requerido."});
    }
};

exports.createProductCategory = function(req,res){
    let bodyData = req.body;

    if(bodyData){
        productCategoryModel.createProductCategory(bodyData).then((productCategory)=>{
            res.status(200).send({status:200,category:productCategory});
        }).catch((error)=>{
            res.status(400).send({status:400,message:error.message});
        });
    }else{
        res.status(400).send({status:400,message:"Datos de la categoría son necesarios."});
    }
};

exports.deleteProductCategory = function(req,res){
    let id = req.params.categoryCode;
    if(id){
        productCategoryModel.getProductCategory(id).then((productCategory) => {
            if(productCategory){
                productCategoryModel.deleteProductCategory(id).then((modified)=>{
                    if(modified){
                        res.status(200).send({status:200,result:modified})
                    }else{
                        res.status(400).send({status:400,message:"Se ejecutó la accion pero no hubieron cambios."});
                    }
                }).catch((error)=>{
                    res.status(400).send({status:400,message:error.message});
                });
            }else{
                res.status(400).send({status:400,message:"Categoría no encontrada."});
            }
        }).catch((error) => {
            res.status(400).send({status:400,message:error.message});
        });
    }else{
        res.status(400).send({status:400,message:"El id de categoría es necesario."});
    }
};

exports.updateProductCategory = function(req,res){
    let id = req.params.categoryCode;
    let productCategoryInfo = req.body;

    productCategoryModel.getProductCategory(id).then((category) => {
        if(category){
            productCategoryModel.updateProductCategory(id,productCategoryInfo).then((result)=>{
                if(result[0]){
                    res.status(200).send({status:200,result:result[0]});
                }else{
                    res.status(400).send({status:400,message:"No se hicieron cambios."});
                }
            }).catch((error)=>{
                res.status(400).send({status:400,message:error.message});
            });    
        }else{
            res.status(400).send({status:400,message:"Categoría no encontrada."});
        }
    }).catch((error) => {
        res.status(400).send({status:400,message:error.message});
    });
};
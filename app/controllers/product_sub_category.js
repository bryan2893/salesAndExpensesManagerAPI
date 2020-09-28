let productSubCategoryModel = require('../models/product_sub_category');

exports.getAllSubCategories = function(req,res){

    productSubCategoryModel.getAllSubCategories().then((productSubCategories)=>{
        res.status(200).send(productSubCategories);
    }).catch((error) => {
        res.status(400).send({status:400,message:"Error: "+error.message});
    });

};

exports.getSubCategory = function(req,res){
    let id = req.params.subCategoryCode;
    if(id){
        productSubCategoryModel.getSubCategory(id).then((productSubCategory)=>{
            if(productSubCategory){
                return res.status(200).send({status:200,sub_category:productSubCategory});
            }else{
                return res.status(400).send({status:400,message:"No se encontró la sub categoría de productos"});
            }
        }).catch((error)=>{
            return res.status(400).send({status:400,message:"Error: "+error.message});
        });
    }else{
        return res.status(400).send({status:400,message:"Id de sub categoría es requerido."});
    }
};

exports.createSubCategory = function(req,res){
    let bodyData = req.body;

    if(bodyData){
        productSubCategoryModel.createSubCategory(bodyData).then((productSubCategory)=>{
            res.status(200).send({status:200,sub_category:productSubCategory});
        }).catch((error)=>{
            res.status(400).send({status:400,message:error.message});
        });
    }else{
        res.status(400).send({status:400,message:"Datos de la categoría son necesarios."});
    }
};

exports.deleteSubCategory = function(req,res){
    let id = req.params.subCategoryId;
    if(id){
        productSubCategoryModel.getSubCategory(id).then((productSubCategory) => {
            if(productSubCategory){
                productSubCategoryModel.deleteSubCategory(id).then((modified)=>{
                    if(modified){
                        res.status(200).send({status:200,result:modified})
                    }else{
                        res.status(400).send({status:400,message:"Se ejecutó la accion pero no hubieron cambios."});
                    }
                }).catch((error)=>{
                    res.status(400).send({status:400,message:error.message});
                });
            }else{
                res.status(400).send({status:400,message:"Sub cateoría no encontrada."});
            }
        }).catch((error) => {
            res.status(400).send({status:400,message:error.message});
        });
    }else{
        res.status(400).send({status:400,message:"El id de la sub categoría es necesario."});
    }
};

exports.updateSubCategory = function(req,res){
    let id = req.params.subCategoryId;
    let productSubCategoryInfo = req.body;

    productSubCategoryModel.getSubCategory(id).then((product) => {
        if(product){
            productSubCategoryModel.updateSubCategory(id,productSubCategoryInfo).then((result)=>{
                if(result[0]){
                    res.status(200).send({status:200,result:result[0]});
                }else{
                    res.status(400).send({status:400,message:"No se hicieron cambios."});
                }
            }).catch((error)=>{
                res.status(400).send({status:400,message:error.message});
            });    
        }else{
            res.status(400).send({status:400,message:"Sub categoría no encontrada."});
        }
    }).catch((error) => {
        res.status(400).send({status:400,message:error.message});
    });
};

exports.getSubCategoriesByCategory = function(req,res){
    let categoryId = req.params.categoryId;

    productSubCategoryModel.getSubCategoriesByCategory(categoryId).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });

};
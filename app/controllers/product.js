let productModel = require('../models/product');

exports.getAllProducts = function(req,res){

    productModel.getAllProducts().then((products)=>{
        res.status(200).send(products);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });

};

exports.getProduct = function(req,res){
    let id = req.params.productCode;
    if(id){
        productModel.getProduct(id).then((product)=>{
            if(product){
                return res.status(200).send({status:200,product:product});
            }else{
                return res.status(400).send({status:400,message:"No se encontró el producto"});
            }
        }).catch((error)=>{
            return res.status(400).send({status:400,message:"Error: "+error.message});
        });
    }else{
        return res.status(400).send({status:400,message:"Código de producto es requerido."});
    }
};

exports.createProduct = function(req,res){
    let bodyData = req.body;

    if(bodyData){
        productModel.createProduct(bodyData).then((product)=>{
            res.status(200).send({status:200,product:product});
        }).catch((error)=>{
            res.status(400).send({status:400,message:error.message});
        });
    }else{
        res.status(400).send({status:400,message:"Datos del producto son necesarios."});
    }
};

exports.deleteProduct = function(req,res){
    let id = req.params.productCode;
    if(id){
        productModel.getProduct(id).then((product) => {
            if(product){
                productModel.deleteProduct(id).then((deleted)=>{
                    if(deleted){
                        res.status(200).send({status:200,result:deleted})
                    }else{
                        res.status(400).send({status:400,message:"Se ejecutó la accion pero no hubieron cambios."});
                    }
                }).catch((error)=>{
                    res.status(400).send({status:400,message:error.message});
                });
            }else{
                res.status(400).send({status:400,message:"Producto no encontrado."});
            }
        }).catch((error) => {
            res.status(400).send({status:400,message:error.message});
        });
    }else{
        res.status(400).send({status:400,message:"El código de producto es necesario."});
    }
};

exports.updateProduct = function(req,res){
    let id = req.params.productCode;
    let productInfo = req.body;

    productModel.getProduct(id).then((product) => {
        if(product){
            productModel.updateProduct(id,productInfo).then((result)=>{
                if(result[0]){
                    res.status(200).send({status:200,result:result[0]});
                }else{
                    res.status(400).send({status:400,message:"No se hicieron cambios."});
                }
            }).catch((error)=>{
                res.status(400).send({status:400,message:error.message});
            });    
        }else{
            res.status(400).send({status:400,message:"Producto no encontrado."});
        }
    }).catch((error) => {
        res.status(400).send({status:400,message:error.message});
    });
};


exports.filterProductsBySubCategory = function(req,res){
    let subCategoryCode = req.params.subCategoryCode;

    productModel.filterProductsBySubCategory(subCategoryCode).then((filteredProductsList)=>{
        res.status(200).send(filteredProductsList);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};
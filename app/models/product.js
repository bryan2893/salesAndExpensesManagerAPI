let dbObject = require('./dbconnection');
const productModel = dbObject.Product;

exports.getAllProducts = () => {
    return new Promise((resolve,reject) => {
        productModel.findAll().then((products) => {
            resolve(products);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.getProduct = (productId) => {
    return new Promise((resolve,reject) => {
        productModel.findByPk(productId).then((product) => {
            resolve(product);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.createProduct = (productInfo)=>{
    return new Promise((resolve,reject) => {
        productModel.create(productInfo).then((createdProduct) => {
            resolve(createdProduct);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.deleteProduct = (productId)=>{
    return new Promise((resolve,reject) => {
        productModel.destroy({
            where: {
                productCode: productId
            }
          }).then((response) => {
            resolve(response);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.updateProduct = (productId,newProductInfo)=>{
     
    return new Promise((resolve,reject) => {
        productModel.update(newProductInfo,{
            where: {productCode: productId}
        }).then((response) => {
            resolve(response);
        }).catch((error)=>{
            reject(error);
        });
    });

};

exports.getProductsByCategory = (categoryId)=>{
      return new Promise((resolve,reject) => {
        productModel.findAll({
            where: {
                categoryId: categoryId
            }
          }).then((response) => {
            resolve(response);
        }).catch((error)=>{
            reject(error);
        });
    });
};
let dbObject = require('./dbconnection');
const productModel = dbObject.Product;

exports.getAllProducts= () => {
    return new Promise((resolve,reject) => {
        productModel.findAll().then((products) => {
            resolve(products);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.getProduct = (productCode) => {
    return new Promise((resolve,reject) => {
        productModel.findByPk(productCode).then((product) => {
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

exports.deleteProduct = (productCode)=>{
    return new Promise((resolve,reject) => {
        productModel.destroy({
            where: {
                productCode: productCode
            }
          }).then((response) => {
            resolve(response);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.updateProduct = (productCode,newProductInfo)=>{
    return new Promise((resolve,reject) => {
        productModel.update(newProductInfo,{
            where: {productCode: productCode}
        }).then((response) => {
            resolve(response);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.filterProductsBySubCategory = (categoryCode) => {
    return new Promise((resolve,reject) => {
        productModel.findAll({
            where: {
                subCategoryCode: categoryCode
            }
          }).then((products) => {
            resolve(products);
        }).catch((error)=>{
            reject(error);
        });
    });
};
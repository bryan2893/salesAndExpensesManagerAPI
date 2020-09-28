let dbObject = require('./dbconnection');
const productCategoryModel = dbObject.ProductCategory;

exports.getAllProductCategories = () => {
    return new Promise((resolve,reject) => {
        productCategoryModel.findAll().then((productCategories) => {
            resolve(productCategories);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.getProductCategory = (categoryId) => {
    return new Promise((resolve,reject) => {
        productCategoryModel.findByPk(categoryId).then((productCategory) => {
            resolve(productCategory);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.createProductCategory = (productCategoryInfo)=>{
    return new Promise((resolve,reject) => {
        productCategoryModel.create(productCategoryInfo).then((createdCategory) => {
            resolve(createdCategory);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.deleteProductCategory  = (categoryId)=>{
    return new Promise((resolve,reject) => {
        productCategoryModel.destroy({
            where: {
                categoryCode: categoryId
            }
          }).then((response) => {
            resolve(response);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.updateProductCategory = (categoryId,newProductCategory)=>{
    return new Promise((resolve,reject) => {
        productCategoryModel.update(newProductCategory,{
            where: {categoryCode: categoryId}
        }).then((response) => {
            resolve(response);
        }).catch((error)=>{
            reject(error);
        });
    });
};
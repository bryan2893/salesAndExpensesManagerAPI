let dbObject = require('./dbconnection');
const productSubCategoryModel = dbObject.ProductSubCategory;

exports.getAllSubCategories = () => {
    return new Promise((resolve,reject) => {
        productSubCategoryModel.findAll().then((productSubCategories) => {
            resolve(productSubCategories);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.getSubCategory = (subCategoryId) => {
    return new Promise((resolve,reject) => {
        productSubCategoryModel.findByPk(subCategoryId).then((productSubCategory) => {
            resolve(productSubCategory);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.createSubCategory = (subCategoryInfo)=>{
    return new Promise((resolve,reject) => {
        productSubCategoryModel.create(subCategoryInfo).then((createdSubCategory) => {
            resolve(createdSubCategory);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.deleteSubCategory = (subCategoryId)=>{
    return new Promise((resolve,reject) => {
        productSubCategoryModel.destroy({
            where: {
                subCategoryCode: subCategoryId
            }
          }).then((response) => {
            resolve(response);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.updateSubCategory = (subCategoryId,newSubCategoryInfo)=>{
    return new Promise((resolve,reject) => {
        productSubCategoryModel.update(newSubCategoryInfo,{
            where: {subCategoryCode: subCategoryId}
        }).then((response) => {
            resolve(response);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.getSubCategoriesByCategory = (categoryId)=>{
      return new Promise((resolve,reject) => {
        productSubCategoryModel.findAll({
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
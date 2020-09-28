let dbObject = require('./dbconnection');
const saleInvoiceModel = dbObject.SaleInvoice;

exports.getAllSaleInvoices= () => {
    return new Promise((resolve,reject) => {
        saleInvoiceModel.findAll().then((saleInvoices) => {
            resolve(saleInvoices);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.getSaleInvoice = (productCode) => {
    return new Promise((resolve,reject) => {
        saleInvoiceModel.findByPk(productCode).then((saleInvoice) => {
            resolve(product);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.createSaleInvoice = (productInfo)=>{
    return new Promise((resolve,reject) => {
        saleInvoiceModel.create(productInfo).then((createdProduct) => {
            resolve(createdProduct);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.deleteSaleInvoice = (saleInvoiceCode)=>{
    return new Promise((resolve,reject) => {
        saleInvoiceModel.destroy({
            where: {
                saleInvoiceCode: saleInvoiceCode
            }
          }).then((response) => {
            resolve(response);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.updateSaleInvoice = (productCode,newProductInfo)=>{
    return new Promise((resolve,reject) => {
        saleInvoiceModel.update(newProductInfo,{
            where: {productCode: productCode}
        }).then((response) => {
            resolve(response);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.filterSaleInvoicesByDateRange = (categoryCode) => {
    return new Promise((resolve,reject) => {
        saleInvoiceModel.findAll({
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
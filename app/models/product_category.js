let connection = require('./dbconnection');

exports.getAllProductCategories = () => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM categoria_producto';
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.getProductCategory = (categoryCode) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM categoria_producto WHERE codigo = ' + connection.escape(categoryCode);
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.saveProductCategory = (productCategoryDTO)=>{
    return new Promise((resolve,reject)=>{
        let sql    = `INSERT INTO categoria_producto (codigo,nombre) values ? `;
        let values = [[productCategoryDTO.codigo,productCategoryDTO.nombre]];

        connection.query(sql, [values] ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });

    });
};

exports.deleteProductCategory  = (categoryCode)=>{
    return new Promise((resolve,reject)=>{
        let sql = "DELETE FROM categoria_producto WHERE codigo = ?";

        connection.query(sql, categoryCode ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.updateProductCategory = (productCategoryDTO)=>{

    return new Promise((resolve,reject)=>{
        
        let sql = `UPDATE categoria_producto
           SET nombre = ?
           WHERE codigo = ?`;

        let data = [productCategoryDTO.nombre,productCategoryDTO.codigo];

        connection.query(sql, data ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};
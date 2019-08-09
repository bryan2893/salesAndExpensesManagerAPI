let connection = require('./dbconnection');

exports.getAllSubCategoryProducts = () => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM categoria_sub_producto';
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.getSubCategoryProduct = (subCategoryCode) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM categoria_sub_producto WHERE codigo = ' + connection.escape(subCategoryCode);
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.saveSubCategoryProduct = (subCategoryProductDTO)=>{
    return new Promise((resolve,reject)=>{
        let sql    = `INSERT INTO categoria_sub_producto (nombre) values ? `;
        let values = [[subCategoryProductDTO.nombre]];

        connection.query(sql, [values] ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });

    });
};

exports.deleteSubCategoryProduct  = (subCategoryCode)=>{
    return new Promise((resolve,reject)=>{
        let sql = "DELETE FROM categoria_sub_producto WHERE codigo = ?";

        connection.query(sql, subCategoryCode ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });

    });
};

exports.updateSubCategoryProduct = (subCategoryProductDTO)=>{

    return new Promise((resolve,reject)=>{
        
        let sql = `UPDATE categoria_sub_producto
           SET nombre = ?
           WHERE codigo = ?`;

        let data = [subCategoryProductDTO.nombre,subCategoryProductDTO.codigo];

        connection.query(sql, data ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};
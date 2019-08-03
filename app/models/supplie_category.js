let connection = require('./dbconnection');

exports.getAllSupplieCategories = () => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM categoria_insumo';
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.getSupplieCategory = (categoryCode) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM categoria_insumo WHERE codigo = ' + connection.escape(categoryCode);
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.saveSupplieCategory = (supplieCategoryDTO)=>{
    return new Promise((resolve,reject)=>{
        let sql    = `INSERT INTO categoria_insumo (nombre) values ? `;
        let values = [[supplieCategoryDTO.nombre]];

        connection.query(sql, [values] ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });

    });
};

exports.deleteSupplieCategorie  = (categoryCode)=>{
    return new Promise((resolve,reject)=>{
        let sql = "DELETE FROM categoria_insumo WHERE codigo = ?";

        connection.query(sql, categoryCode ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.updateSupplieCategory = (supplieCategoryDTO)=>{

    return new Promise((resolve,reject)=>{
        
        let sql = `UPDATE categoria_insumo
           SET nombre = ?
           WHERE codigo = ?`;

        let data = [supplieCategoryDTO.nombre,supplieCategoryDTO.codigo];

        connection.query(sql, data ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};
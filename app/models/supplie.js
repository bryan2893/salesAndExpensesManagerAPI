/*Se comunican con la base de datos para manipular 
informacion relacionada con insumos registrados
*/
let connection = require('./dbconnection');

exports.getAllSupplies = () => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM insumos';
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.getSupplie = (supplieCode) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM insumos WHERE codigo = ' + connection.escape(supplieCode);
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.saveSupplie = (suplieDTO)=>{
    return new Promise((resolve,reject)=>{
        let sql    = `INSERT INTO insumos (nombre,unidad_medida,categoria) values ? `;
        let values = [[suplieDTO.nombre,suplieDTO.unidad_medida,suplieDTO.categoria]];

        connection.query(sql, [values] ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.deleteSupplie = (supplieCode)=>{
    return new Promise((resolve,reject)=>{
        let sql = "DELETE FROM insumos WHERE codigo = ?";

        connection.query(sql, supplieCode ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.updateSupplie = (suplieDTO)=>{

    return new Promise((resolve,reject)=>{
        
        let sql = `UPDATE insumos
           SET nombre = ?,
           unidad_medida = ?,
           categoria = ?
           WHERE codigo = ?`;

        let data = [suplieDTO.nombre,suplieDTO.unidad_medida,suplieDTO.categoria,suplieDTO.codigo];

        connection.query(sql, data ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};
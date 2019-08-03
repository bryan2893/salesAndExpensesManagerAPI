/*Se comunican con la base de datos para manipular 
informacion relacionada con proveedores registrados.
*/
let connection = require('./dbconnection');

exports.getAllProviders = () => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM proveedores';
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.getProvider = (providerCode) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM proveedores WHERE codigo = ' + connection.escape(providerCode);
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.saveProvider = (providerDTO)=>{
    return new Promise((resolve,reject)=>{
        let sql    = `INSERT INTO proveedores (nombre,telefono) values ? `;
        let values = [[providerDTO.nombre,providerDTO.telefono]];

        connection.query(sql, [values] ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });

    });
};

exports.deleteProvider = (providerCode)=>{
    return new Promise((resolve,reject)=>{
        let sql = "DELETE FROM proveedores WHERE codigo = ?";

        connection.query(sql, providerCode ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.updateProvider = (providerDTO)=>{

    return new Promise((resolve,reject)=>{
        
        let sql = `UPDATE proveedores
           SET nombre = ?,
           telefono = ?
           WHERE codigo = ?`;

        let data = [providerDTO.nombre,providerDTO.telefono,providerDTO.codigo];

        connection.query(sql, data ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};
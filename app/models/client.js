/*Se comunican con la base de datos para manipular 
informacion relacionada con trabajadores registrados
*/
let connection = require('./dbconnection');

exports.getAllClients = () => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM clientes';
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.getClientByIdentifier = (clientIdentifier) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM clientes WHERE identificacion = ' + connection.escape(clientIdentifier);
        connection.query(sql,function (error, result, fields) {
            if (error) reject(error);
            resolve(result);
        });
    });
};

exports.saveClient = (clientDTO)=>{
    return new Promise((resolve,reject)=>{
        let sql    = `INSERT INTO clientes (identificacion,nombre_completo,telefono) values ?`;
        let values = [[clientDTO.identificacion,clientDTO.nombre_completo,clientDTO.telefono]];

        connection.query(sql, [values] ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.deleteClient = (clientIdentifier)=>{
    return new Promise((resolve,reject)=>{
        let sql = "DELETE FROM clientes WHERE identificacion = ?";

        connection.query(sql, clientIdentifier ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });

    });
};

exports.updateClient = (clientDTO)=>{

    return new Promise((resolve,reject)=>{
        
        let sql = `UPDATE clientes
           SET nombre_completo = ?,
           telefono = ?
           WHERE identificacion = ?`;

        let data = [clientDTO.nombre_completo,clientDTO.telefono,clientDTO.identificacion];

        connection.query(sql, data ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
        
    });
};
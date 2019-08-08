/*Se comunican con la base de datos para manipular 
informacion relacionada con trabajadores registrados
*/
let connection = require('./dbconnection');

//Extrae todOs los trabajadores registrados...
exports.getAllWorkers = () => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM trabajadores';
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

//Se busca un trabajador especificamente por su id...
exports.getWorker = (workerId) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM trabajadores WHERE cedula = ' + connection.escape(workerId);
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.getWorkerByIdAndPassword = (workerId,password) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM trabajadores WHERE cedula = ? AND password = ?';
        connection.query(sql,[workerId,password],function (error, result, fields) {
            if (error) reject(error);
            resolve(result);
        });
    });
};

exports.saveWorker = (workerDTO)=>{
    return new Promise((resolve,reject)=>{
        let sql    = `INSERT INTO trabajadores (cedula,nombre_completo,fecha_ingreso,admin,password) values ? `;
        let values = [[workerDTO.cedula,workerDTO.nombre_completo,workerDTO.fecha_ingreso,workerDTO.admin,workerDTO.password]];

        connection.query(sql, [values] ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });

    });
};

exports.deleteWorker = (workerId)=>{
    return new Promise((resolve,reject)=>{
        let sql = "DELETE FROM trabajadores WHERE cedula = ?";

        connection.query(sql, workerId ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.updateWorker = (workerDTO)=>{

    return new Promise((resolve,reject)=>{
        
        let sql = `UPDATE trabajadores
           SET nombre_completo = ?,
           fecha_ingreso = ?,
           admin = ?,
           password = ? 
           WHERE cedula = ?`;

        let data = [workerDTO.nombre_completo,workerDTO.fecha_ingreso,workerDTO.admin,workerDTO.password,workerDTO.cedula];

        connection.query(sql, data ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};
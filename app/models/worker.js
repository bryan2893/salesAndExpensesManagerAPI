/*Se comunican con la base de datos para manipular 
informacion relacionada con trabajadores registrados
*/
let connection = require('./dbconnection');

//Extrae todos los trabajadores registrados...
exports.getAllWorkers = () => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM workers';
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

//Se busca un trabajador especificamente por su id...
exports.getWorker = (workerId) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM workers WHERE workerId = ' + connection.escape(workerId);
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.getWorkerByIdAndPassword = (workerId,password) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM workers WHERE workerId = ? AND password = ?';
        connection.query(sql,[workerId,password],function (error, result, fields) {
            if (error) reject(error);
            resolve(result);
        });
    });
};

exports.saveWorker = (workerDTO)=>{
    return new Promise((resolve,reject)=>{
        let sql    = `INSERT INTO workers (workerId,fullName,password,rol) values ? `;
        let values = [[workerDTO.workerId,workerDTO.fullName,workerDTO.password,workerDTO.rol]];

        connection.query(sql, [values] ,function (error, results, fields) {
            if (error) reject(error);
            resolve(workerDTO);
        });
    });
};

exports.deleteWorker = (workerId)=>{
    return new Promise((resolve,reject)=>{
        this.getWorker(workerId).then((worker)=>{
            let sql = "DELETE FROM workers WHERE workerId = ?";
            connection.query(sql, workerId ,function (error, results, fields) {
                if (error) reject(error);
                resolve(worker);
            });
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.updateWorker = (workerDTO)=>{

    return new Promise((resolve,reject)=>{
        
        let sql = `UPDATE workers
           SET fullName = ?,
           password = ?,
           rol = ? 
           WHERE workerId = ?`;

        let data = [workerDTO.fullName,workerDTO.password,workerDTO.rol,workerDTO.workerId];

        connection.query(sql, data ,function (error, results, fields) {
            if (error) reject(error);
            resolve(workerDTO);
        });
    });
};
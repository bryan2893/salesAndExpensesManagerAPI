/*Se comunican con la base de datos para manipular 
informacion relacionada con trabajadores registrados
*/
let connection = require('./dbconnection');

exports.getAllClients = () => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM clients';
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.getClientByIdentifier = (clientIdentifier) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM clients WHERE clientId = ' + connection.escape(clientIdentifier);
        connection.query(sql,function (error, result, fields) {
            if (error) reject(error);
            resolve(result);
        });
    });
};

exports.saveClient = (clientDTO)=>{
    return new Promise((resolve,reject)=>{
        let sql    = `INSERT INTO clients (clientId,fullName,phoneNumber) values ?`;
        let values = [[clientDTO.clientId,clientDTO.fullName,clientDTO.phoneNumber]];

        connection.query(sql, [values] ,function (error, results, fields) {
            if (error) reject(error);
            resolve(clientDTO);
        });
    });
};

exports.deleteClient = (clientIdentifier)=>{
    return new Promise((resolve,reject)=>{
        this.getClientByIdentifier(clientIdentifier).then((client)=>{

            if(!client.clientId){
                resolve({"message":"Client not found!"});
            }

            let sql = "DELETE FROM clients WHERE clientId = ?";

            connection.query(sql, clientIdentifier ,function (error, results, fields) {
                if (error) reject(error);
                resolve(client);
            });
        }).catch((error)=>{
            reject(error);
        });

    });
};

exports.updateClient = (clientDTO)=>{

    return new Promise((resolve,reject)=>{
        
        let sql = `UPDATE clients
           SET fullName = ?,
           phoneNumber = ?
           WHERE clientId = ?`;

        let data = [clientDTO.fullName,clientDTO.phoneNumber,clientDTO.clientId];

        connection.query(sql, data ,function (error, results, fields) {
            if (error) reject(error);
            resolve(clientDTO);
        });
        
    });
};
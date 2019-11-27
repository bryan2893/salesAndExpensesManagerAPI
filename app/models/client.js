let dbObject = require('./dbconnection');
const clientModel = dbObject.Client;


exports.getAllClients = function(){
    return new Promise((resolve,reject) => {
        clientModel.findAll().then((clients) => {
            resolve(clients);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.getClientById = function(id){
    return new Promise((resolve,reject) => {
        clientModel.findByPk(id).then((client) => {
            resolve(client);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.deleteClient = function(id){
    return new Promise((resolve,reject) => {
        clientModel.destroy({
            where: {
                clientId: id
            }
          }).then((response) => {
            resolve(response);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.createClient = function(clientInfo){
    return new Promise((resolve,reject) => {
        clientModel.create(clientInfo).then((response) => {
            resolve(response);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.updateClient = function(clientId,clientInfo){
    return new Promise((resolve,reject) => {
        clientModel.update(clientInfo,{
            where: {clientId: clientId}
        }).then((response) => {
            resolve(response);
        }).catch((error)=>{
            reject(error);
        });
    });
};
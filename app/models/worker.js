let dbObject = require('./dbconnection');
const workerModel = dbObject.Worker;

//Extrae todos los trabajadores registrados...
exports.getAllWorkers = () => {
    return new Promise((resolve,reject) => {
        workerModel.findAll().then((workers) => {
            resolve(workers);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.getWorker = (workerId) => {
    return new Promise((resolve,reject) => {
        workerModel.findByPk(workerId).then((worker) => {
            resolve(worker);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.createWorker = (workerInfo)=>{
    return new Promise((resolve,reject) => {
        workerModel.create(workerInfo).then((createdWorker) => {
            resolve(createdWorker);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.deleteWorker = (workerId)=>{
    return new Promise((resolve,reject) => {
        workerModel.destroy({
            where: {
                workerId: workerId
            }
          }).then((response) => {
            resolve(response);
        }).catch((error)=>{
            reject(error);
        });
    });
};

exports.updateWorker = (workerId,newWorkerInfo)=>{

    return new Promise((resolve,reject) => {
        workerModel.update(newWorkerInfo,{
            where: {workerId: workerId}
        }).then((response) => {
            resolve(response);
        }).catch((error)=>{
            reject(error);
        });
    });

};
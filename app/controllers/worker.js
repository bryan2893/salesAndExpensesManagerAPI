let workerModel = require('../models/worker');
let WORKER = require('../models/DTO/worker');

exports.getAllWorkers = function(req,res){

    workerModel.getAllWorkers().then((results)=>{
        res.status(200).json(results);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.getAWorker = function(req,res){
    let id = req.params.workerId;
    
    workerModel.getWorker(id).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.saveWorker = function(req,res){
    let bodyData = req.body;
    let workerDTO = new WORKER(bodyData.workerId,bodyData.fullName,bodyData.password,bodyData.rol);

    workerModel.saveWorker(workerDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });

};

exports.deleteWorker = function(req,res){
    let id = req.params.workerId;
    if(id){
        workerModel.deleteWorker(id).then((result)=>{
            res.status(200).send(result);
        }).catch((error)=>{
            res.status(401).send({message:error.message});
        });
    }else{
        res.status(401).send({message:"workerId is needed!"});
    }
};

exports.updateWorker = function(req,res){
    let bodyData = req.body;
    let workerDTO = new WORKER(bodyData.cedula,bodyData.nombre_completo,bodyData.fecha_ingreso,bodyData.admin,bodyData.password);

    workerModel.updateWorker(workerDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};
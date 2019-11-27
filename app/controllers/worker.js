let workerModel = require('../models/worker');

exports.getAllWorkers = function(req,res){

    workerModel.getAllWorkers().then((workers)=>{
        res.status(200).send(workers);
    }).catch((error) => {
        res.status(400).send({status:400,message:"Error: "+error.message});
    });

};

exports.getAWorker = function(req,res){
    let id = req.params.workerId;
    if(id){
        workerModel.getWorker(id).then((worker)=>{
            if(worker){
                return res.status(200).send({status:200,worker:worker});
            }else{
                return res.status(400).send({status:400,message:"No se encontró el trabajador"});
            }
        }).catch((error)=>{
            return res.status(400).send({status:400,message:"Error: "+error.message});
        });
    }else{
        return res.status(400).send({status:400,message:"Id de trabajador es requerido."});
    }
};


exports.createWorker = function(req,res){
    let bodyData = req.body;

    if(bodyData){
        workerModel.createWorker(bodyData).then((result)=>{
            res.status(200).send({status:200,client:result});
        }).catch((error)=>{
            res.status(400).send({status:400,message:error.message});
        });
    }else{
        res.status(400).send({status:400,message:"Datos del cliente son necesarios."});
    }
};

exports.deleteWorker = function(req,res){
    let id = req.params.workerId;
    if(id){
        workerModel.deleteWorker(id).then((modified)=>{
            if(modified){
                res.send(200,{status:200,result:modified})
            }else{
                res.send(400,{status:400,message:"Se ejecutó la accion pero no hubieron cambios."});
            }
        }).catch((error)=>{
            res.send(400,{status:400,message:error.message});
        });
    }else{
        res.send(400,{status:400,message:"workerId is needed!"});
    }
};

exports.updateWorker = function(req,res){
    let id = req.params.workerId;
    let newWorkerInfo = req.body;

    workerModel.getWorker(id).then((worker) => {
        if(worker){
            workerModel.updateWorker(id,newWorkerInfo).then((result)=>{
                if(result[0]){
                    res.send(200,{status:200,result:result[0]});
                }else{
                    res.send(400,{status:400,message:"No se hicieron cambios."});
                }
            }).catch((error)=>{
                res.send(400,{status:400,message:error.message});
            });    
        }else{
            res.status(400).send({status:400,message:"Cliente no encontrado."});
        }
    }).catch((error) => {
        res.status(400).send({status:400,message:error.message});
    });

};
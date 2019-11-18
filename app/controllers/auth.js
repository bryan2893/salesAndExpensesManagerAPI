//Hace el login de un usuario y le devuelve token en caso de que se encuentre registrado !
let tokenCreatorService = require('../service/auth');
let workerModel = require('../models/worker');

exports.auth = function(req,res){
    let cedula = req.body.workerId; //El cual es único en la base de datos, no puede haber otro igual.
    let password = req.body.password;

    workerModel.getWorkerByIdAndPassword(cedula,password).then(function(result){
        let worker = result[0];

        if(worker){
            return res.status(200).send({token:tokenCreatorService.createToken(worker)});
        }else{
            return res.status(401).send({message:"Credenciales inválidas!"});
        }
    }).catch(function(error){
        return res.status(500).send({message:error.message});
    });
    
};
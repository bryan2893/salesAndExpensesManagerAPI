const modeloTrabajador = require('../models/trabajador');

exports.obtenerTodosLosTrabajadores = function(req,res){

    modeloTrabajador.findAll().then((trabajadores) => {
        res.status(200).send({status:200,trabajadores:trabajadores});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });

};

exports.crearNuevoTrabajador = function(req,res){

    const informacionTrabajador = req.body;

    modeloTrabajador.create(informacionTrabajador).then((trabajadorCreado) => {
        res.status(200).send({status:200,trabajador:trabajadorCreado});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });
    
};
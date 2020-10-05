const modeloTrabajador = require('../models/trabajador');
const servicioEncriptacion = require('../service/encryption');
const servicioAutenticacion = require('../service/auth');

exports.obtenerTodosLosTrabajadores = function(req,res){

    modeloTrabajador.findAll().then((trabajadores) => {
        res.status(200).send({status:200,trabajadores:trabajadores});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });

};

exports.crearNuevoTrabajador = function(req,res){

    const {cedula,nombre_completo,contraseña} = req.body;

    let contraseñaEncriptada = servicioEncriptacion.encriptarContraseña(contraseña);

    const informacionTrabajador = {cedula,nombre_completo,contraseña:contraseñaEncriptada};

    modeloTrabajador.create(informacionTrabajador).then((trabajadorCreado) => {
        res.status(200).send({status:200,trabajador:trabajadorCreado});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });
    
};

exports.actualizarTrabajador = function(req,res){

    const id_trabajador = req.params.id_trabajador;
    const {cedula,nombre_completo,contraseña} = req.body;
    const informacionTrabajador = {cedula,nombre_completo,contraseña};

    modeloTrabajador.update(informacionTrabajador,{
        where: {id_trabajador: id_trabajador}
    }).then((response) => {
        res.status(200).send({status:200,registros_actualizados:response[0]});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });
    
};

exports.eliminarTrabajador = function(req,res){

    const id_trabajador = req.params.id_trabajador;

    modeloTrabajador.destroy({
        where: {
            id_trabajador: id_trabajador
        }
      }).then((response) => {
        res.status(200).send({status:200,registros_eliminados:response[0]});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });
    
};

exports.obtenerTrabajador = function(req,res){

    const id_trabajador = req.params.id_trabajador;

    modeloTrabajador.findByPk(id_trabajador).then((trabajador) => {
        res.status(200).send({status:200,trabajador:trabajador});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });
    
};

exports.autenticarTrabajador = function(req,res){

    let {cedula,contraseña} = req.body;

    modeloTrabajador.findAll({limit:1,where:{cedula:cedula}}).then((response) => {
        let trabajador = response[0];
        if(trabajador){
            servicioEncriptacion.compararContraseña(contraseña,trabajador.contraseña).then((booleano)=>{
                if(booleano){
                    let token = servicioAutenticacion.createToken(trabajador);
                    res.status(200).send({status:200,token:token});
                }
            });
        }else{
            res.status(400).send({status:400,token:null});
        }
        
    }).catch(error => res.status(400).send({message:error.message}));

}
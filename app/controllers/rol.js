const modeloRol = require('../models/rol');

exports.obtenerTodosLosRoles = function(req,res){

    modeloRol.findAll().then((roles) => {
        res.status(200).send({status:200,roles:roles});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });

};

exports.crearNuevoRol = function(req,res){

    const {nombre,descripcion} = req.body;

    const informacionDeRol = {nombre,descripcion}

    modeloRol.create(informacionDeRol).then((rolCreado) => {
        res.status(200).send({status:200,rol:rolCreado});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });
    
};
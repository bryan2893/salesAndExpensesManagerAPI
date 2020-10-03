const modeloUnidadMedida = require('../models/unidad_medida');

exports.obtenerTodasUnidadesMedida = function(req,res){

    modeloUnidadMedida.findAll().then((unidadesMedida) => {
        res.status(200).send({status:200,unidadesMedida:unidadesMedida});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });

};

exports.crearNuevaUnidadMedida = function(req,res){

    const informacionUnidadMedida = req.body;

    modeloUnidadMedida.create(informacionUnidadMedida).then((unidadMedidaCreada) => {
        res.status(200).send({status:200,unidadMedida:unidadMedidaCreada});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });
    
};
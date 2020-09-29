const modeloProducto = require('../models/producto');

exports.obtenerTodosLosProductos = function(req,res){

    modeloProducto.findAll().then((productos) => {
        res.status(200).send({status:200,productos:productos});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });

};

exports.crearNuevoProducto = function(req,res){

    const informacionProducto = req.body;

    modeloProducto.create(informacionProducto).then((productoCreado) => {
        res.status(200).send({status:200,trabajador:productoCreado});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });
    
};
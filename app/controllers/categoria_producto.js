const modeloCategoriaProducto = require('../models/categoria_producto');

exports.obtenerTodasCategoriasDeProducto = function(req,res){

    modeloCategoriaProducto.findAll().then((categoriasProducto) => {
        res.status(200).send({status:200,categoriasProducto:categoriasProducto});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });

};

exports.crearNuevaCategoriaProducto = function(req,res){

    const informacionCategoriaProducto = req.body;

    modeloCategoriaProducto.create(informacionCategoriaProducto).then((categoriaProductoCreada) => {
        res.status(200).send({status:200,categoriaProducto:categoriaProductoCreada});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });
    
};
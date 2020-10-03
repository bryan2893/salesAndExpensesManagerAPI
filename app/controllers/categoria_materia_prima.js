const modeloCategoriaMateriaPrima = require('../models/categoria_materia_prima');

exports.obtenerTodasCategoriasMateriaPrima = function(req,res){

    modeloCategoriaMateriaPrima.findAll().then((categoriasMateriaPrima) => {
        res.status(200).send({status:200,categoriasMateriaPrima:categoriasMateriaPrima});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });

};

exports.crearNuevaCategoriaMateriaPrima = function(req,res){

    const informacionCategoriaMateriaPrima = req.body;

    modeloCategoriaMateriaPrima.create(informacionCategoriaMateriaPrima).then((categoriaMateriaPrima) => {
        res.status(200).send({status:200,categoriaProducto:categoriaMateriaPrima});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });
    
};
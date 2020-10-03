const modeloMateriaPrima = require('../models/materia_prima');

exports.obtenerTodosLasMateriasPrimas = function(req,res){

    modeloMateriaPrima.findAll().then((materiasPrimas) => {
        res.status(200).send({status:200,materiasPrimas:materiasPrimas});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });

};

exports.crearNuevaMateriaPrima = function(req,res){

    const informacionMateriaPrima = req.body;

    modeloMateriaPrima.create(informacionMateriaPrima).then((materiaPrimaCreada) => {
        res.status(200).send({status:200,materiaPrima:materiaPrimaCreada});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });
    
};
//Controladores de lo que tenga que ver con las comidas registradas en la base de datos.
let foodModel = require('../models/food');

exports.getAllFoods = function(req,res){

    foodModel.getAllFoods().then((results)=>{
        res.status(200).send(results);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });

};

exports.getAFood = function(req,res){
    let id = req.params.foodId;
    
    foodModel.getFood(id).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
    //obtener el id de la comida que viene en params
};
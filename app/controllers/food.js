//Controladores de lo que tenga que ver con las comidas registradas en la base de datos.
let foodModel = require('../models/food');
let FOOD = require('../models/DTO/food');

exports.getAllFoods = function(req,res){

    foodModel.getAllFoods().then((results)=>{
        res.status(200).json(results);
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

exports.saveFood = function(req,res){
    let bodyData = req.body;
    let foodDTO = new FOOD(null,bodyData.nombre,bodyData.precio,bodyData.categoria);

    foodModel.saveFood(foodDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};

exports.deleteFood = function(req,res){
    let id = req.params.foodId;
    if(id){
        foodModel.deleteFood(id).then((result)=>{
            res.status(200).send(result);
        }).catch((error)=>{
            res.status(401).send({message:error.message});
        });
    }else{
        res.status(401).send({message:error.message});
    }
};

exports.updateFood = function(req,res){
    let reqBody = req.body;
    let foodDTO = new FOOD(reqBody.foodId,reqBody.nombre,reqBody.precio,reqBody.categoria);

    foodModel.updateFood(foodDTO).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });

};

exports.getFoodsByCategory = function(req,res){
    let category = req.params.category;

    foodModel.getFoodsByCategory(category).then((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(401).send({message:error.message});
    });
};
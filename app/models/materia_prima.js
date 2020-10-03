const dataBase = require('../database/database');
const Sequelize = require('sequelize');

const MateriaPrima = dataBase.define('materias_prima',{
    //atributos
    id_materia_prima:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
    },
    nombre:{
        type:Sequelize.TEXT,
        allowNull: false
    },
    id_unidad_medida:{
        type:Sequelize.FLOAT,
        allowNull: false
    }
},
{
    //opciones
    id:false,
    dataBase
});

module.exports = MateriaPrima;
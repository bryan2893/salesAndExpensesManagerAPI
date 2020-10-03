const dataBase = require('../database/database');
const Sequelize = require('sequelize');

const CategoriaMateriaPrima = dataBase.define('categorias_materia_prima',{
    //atributos
    id_categoria:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
    },
    nombre:{
        type:Sequelize.TEXT,
        allowNull: false
    }
},
{
    //opciones
    id:false,
    dataBase
});

module.exports = CategoriaMateriaPrima;
const dataBase = require('../database/database');
const Sequelize = require('sequelize');

const Producto = dataBase.define('producto',{
    //atributos
    id_producto:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
    },
    nombre:{
        type:Sequelize.TEXT,
        allowNull: false
    },
    precio:{
        type:Sequelize.FLOAT,
        allowNull: false
    },
    url_imagen:{
        type:Sequelize.TEXT,
        allowNull: true
    }
},
{
    //opciones
    id:false,
    dataBase
});

//Creacion de asociaciones.

module.exports = Producto;
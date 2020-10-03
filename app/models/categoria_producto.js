const dataBase = require('../database/database');
const Sequelize = require('sequelize');

const CategoriasProducto = dataBase.define('categorias_producto',{
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

module.exports = CategoriasProducto;
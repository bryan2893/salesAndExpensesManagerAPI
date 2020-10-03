const dataBase = require('../database/database');
const Sequelize = require('sequelize');

const Proveedor = dataBase.define('proveedore',{
    //atributos
    id_proveedor:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
    },
    nombre:{
        type:Sequelize.TEXT,
        allowNull: false
    },
    telefono:{
        type:Sequelize.TEXT,
        allowNull: true
    }
},
{
    //opciones
    id:false,
    dataBase
});

module.exports = Proveedor;
const dataBase = require('../database/database');
const Sequelize = require('sequelize');

const Trabajador = dataBase.define('trabajadore',{
    //atributos
    id_trabajador:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
    },
    cedula:{
        type:Sequelize.TEXT,
        allowNull: false
    },
    nombre_completo:{
        type:Sequelize.TEXT,
        allowNull: false
    },
    contraseña:{
        type:Sequelize.TEXT,
        allowNull: false
    }
},
{
    //opciones
    id:false,
    dataBase
});

module.exports = Trabajador;
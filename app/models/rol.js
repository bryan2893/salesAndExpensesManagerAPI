const dataBase = require('../database/database');
const Sequelize = require('sequelize');

const Rol = dataBase.define('role',{
    //atributos
    id_rol:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
    },
    nombre:{
        type:Sequelize.TEXT,
        allowNull: false
    },
    descripcion:{
        type:Sequelize.TEXT,
        allowNull: true
    }
},
{
    //opciones
    id:false,
    dataBase
});

module.exports = Rol;
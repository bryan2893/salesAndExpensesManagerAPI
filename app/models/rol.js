const dataBase = require('../database/database');
const Sequelize = require('sequelize');
const Permiso = require('../models/permiso');

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

Rol.hasMany(Permiso, {foreignKey:'id_rol'})

module.exports = Rol;
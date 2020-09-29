const dataBase = require('../database/database');
const Sequelize = require('sequelize');
const Rol = require('../models/rol');

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

Trabajador.belongsToMany(Rol, {through: 'trabajadores_roles', foreignKey: 'id_rol' })
Rol.belongsToMany(Trabajador, {through: 'trabajadores_roles', foreignKey: 'id_trabajador' })

module.exports = Trabajador;
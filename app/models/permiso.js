const dataBase = require('../database/database');
const Sequelize = require('sequelize');

const Permiso = dataBase.define('permiso',{
    //atributos
    id_permiso:{
        primaryKey:true,
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false
    },
    id_rol:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    nombre:{
        type:Sequelize.TEXT,
        allowNull: false
    }
},
{
    id:false,
    dataBase
});

module.exports = Permiso;
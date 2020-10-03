const dataBase = require('../database/database');
const Sequelize = require('sequelize');

const UnidadMedida = dataBase.define('unidad_medida',{
    //atributos
    id_unidad_medida:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
    },
    descripcion:{
        type:Sequelize.TEXT,
        allowNull: false
    }
},
{
    //opciones
    id:false,
    dataBase
});


module.exports = UnidadMedida;
const dataBase = require('../database/database');
const Sequelize = require('sequelize');
let FacturaCompra = require('../models/factura_compra');

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

//Creacion de asociaciones.
Proveedor.hasMany(FacturaCompra, {foreignKey:'id_proveedor'})

module.exports = Proveedor;
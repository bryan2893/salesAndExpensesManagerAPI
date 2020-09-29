const dataBase = require('../database/database');
const Sequelize = require('sequelize');
//const FacturaVenta = require('../models/factura_venta');

const DetalleFacturaVenta = dataBase.define('trabajadore',{
    //atributos
    numero_factura:{
        primaryKey:true,
        autoIncrement:false,
        type:Sequelize.INTEGER
    },
    numero_detalle:{
        primaryKey:true,
        autoIncrement:false,
        type:Sequelize.INTEGER
    },
    id_producto:{
        primaryKey:true,
        autoIncrement:false,
        type:Sequelize.INTEGER
    },
    nombre_producto:{
        type:Sequelize.TEXT,
        allowNull: false
    },
    cantidad:{
        type:Sequelize.INTEGER,
        allowNull: false
    },
    precio:{
        type:Sequelize.FLOAT,
        allowNull: false
    },
    total:{
        type:Sequelize.FLOAT,
        allowNull: false
    }
},
{
    //opciones
    id:false,
    dataBase
});

//Creacion de asociaciones.


module.exports = DetalleFacturaVenta;
const dataBase = require('../database/database');
const Sequelize = require('sequelize');
//const FacturaVenta = require('../models/factura_venta');

const DetalleFacturaCompra = dataBase.define('detalles_facturas_compra',{
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
    id_materia_prima:{
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


module.exports = DetalleFacturaCompra;
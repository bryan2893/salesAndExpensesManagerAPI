const dataBase = require('../database/database');
const Sequelize = require('sequelize');
const DetalleFacturaVenta = require('../models/detalle_factura_venta');

const FacturaVenta = dataBase.define('facturas_venta',{
    //atributos
    numero_factura:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
    },
    id_trabajador:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    id_cliente:{
        type:Sequelize.INTEGER,
        allowNull: true
    },
    fecha:{
        type:Sequelize.DATE,
        allowNull: false
    },
    nombre_cliente:{
        type:Sequelize.TEXT,
        allowNull: false
    },
    pendiente:{
        type:Sequelize.CHAR(1),
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
FacturaVenta.hasMany(DetalleFacturaVenta, {foreignKey:'numero_factura'})

module.exports = FacturaVenta;
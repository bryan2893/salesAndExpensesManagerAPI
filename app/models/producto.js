const dataBase = require('../database/database');
const Sequelize = require('sequelize');
const DetalleFacturaVenta = require('../models/detalle_factura_venta');

const Producto = dataBase.define('producto',{
    //atributos
    id_producto:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
    },
    nombre:{
        type:Sequelize.TEXT,
        allowNull: false
    },
    precio:{
        type:Sequelize.FLOAT,
        allowNull: false
    },
    url_imagen:{
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
Producto.hasMany(DetalleFacturaVenta, {foreignKey:'id_producto'})

module.exports = Producto;
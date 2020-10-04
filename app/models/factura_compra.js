const dataBase = require('../database/database');
const Sequelize = require('sequelize');
const DetalleFacturaCompra = require('../models/detalle_factura_compra');

const FacturaCompra = dataBase.define('facturas_compra',{
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
    id_proveedor:{
        type:Sequelize.INTEGER,
        allowNull: true
    },
    fecha:{
        type:Sequelize.DATE,
        allowNull: false
    },
    nombre_proveedor:{
        type:Sequelize.TEXT,
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
FacturaCompra.hasMany(DetalleFacturaCompra, {foreignKey:'numero_factura'})

module.exports = FacturaCompra;
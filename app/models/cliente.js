const dataBase = require('../database/database');
const Sequelize = require('sequelize');
const FacturaVenta = require('../models/factura_venta');

const Cliente = dataBase.define('cliente',{
    //atributos
    id_cliente:{
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
    telefono:{
        type:Sequelize.TEXT,
        allowNull: true
    },
    direccion:{
        type:Sequelize.TEXT,
        allowNull: true
    },
    latitud:{
        type:Sequelize.FLOAT,
        allowNull: true
    },
    longitud:{
        type:Sequelize.FLOAT,
        allowNull: true
    }
},
{
    //opciones
    id:false,
    dataBase
});

Cliente.hasMany(FacturaVenta, {foreignKey:'id_cliente'})

module.exports = Cliente;
const dataBase = require('../database/database');
const Sequelize = require('sequelize');
const Rol = require('../models/rol');
const FacturaVenta = require('../models/factura_venta');
const FacturaCompra = require('../models/factura_compra');

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

//Creacion de asociaciones.
Trabajador.belongsToMany(Rol, {through: 'trabajadores_roles', foreignKey: 'id_rol' })
Rol.belongsToMany(Trabajador, {through: 'trabajadores_roles', foreignKey: 'id_trabajador' })

Trabajador.hasMany(FacturaVenta, {foreignKey:'id_trabajador'})
Trabajador.hasMany(FacturaCompra, {foreignKey:'id_trabajador'})

module.exports = Trabajador;
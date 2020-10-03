const dataBase = require('../database/database');
const Sequelize = require('sequelize');
let CategoriaMateriaPrima = require('../models/categoria_materia_prima');

const MateriaPrima = dataBase.define('materias_prima',{
    //atributos
    id_materia_prima:{
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
    },
    nombre:{
        type:Sequelize.TEXT,
        allowNull: false
    },
    id_unidad_medida:{
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
//MateriaPrima.hasMany(DetalleFacturaVenta, {foreignKey:'id_producto'})

MateriaPrima.belongsToMany(CategoriaMateriaPrima, {through: 'materia_prima_categorias_materia_prima', foreignKey: 'id_categoria' })
CategoriaMateriaPrima.belongsToMany(MateriaPrima, {through: 'materia_prima_categorias_materia_prima', foreignKey: 'id_materia_prima' })

module.exports = MateriaPrima;
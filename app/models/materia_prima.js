const dataBase = require('../database/database');
const Sequelize = require('sequelize');
let CategoriaMateriaPrima = require('../models/categoria_materia_prima');
let UnidadMedida = require('../models/unidad_medida');
let DetalleFacturaCompra = require('../models/detalle_factura_compra');

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
        type:Sequelize.INTEGER,
        allowNull: false
    }
},
{
    //opciones
    id:false,
    dataBase
});

//Creacion de asociaciones.
MateriaPrima.hasMany(DetalleFacturaCompra, {foreignKey:'id_producto'})
MateriaPrima.belongsTo(UnidadMedida, {foreignKey:'id_unidad_medida'})

MateriaPrima.belongsToMany(CategoriaMateriaPrima, {through: 'materia_prima_categorias_materia_prima', foreignKey: 'id_materia_prima' })
CategoriaMateriaPrima.belongsToMany(MateriaPrima, {through: 'materia_prima_categorias_materia_prima', foreignKey: 'id_categoria' })

module.exports = MateriaPrima;
//conexion a la base de datos
let Sequelize = require('sequelize');

const connection = new Sequelize(process.env.DB_NAME,
    process.env.DB_USER, 
    process.env.DB_PASS,
    {
    host: process.env.DB_HOST,
    dialect:'postgres',
    port:process.env.DB_PORT,
    pool:{
        max:4,
        min:0,
        acquire:60000,
        idle:10000
    },
    define:{
        id: false, // don't create default ids !!
        timestamps: false //don't create 'created_at' and 'updated_at' default fields.
    }
});

//********** MODELS ************/

//Client model.
exports.Client = connection.define('client', {
    clientId: {
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phoneNumber:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Worker Model
exports.Worker = connection.define('worker', {
    workerId: {
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rol:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type:Sequelize.STRING
    }
});

exports.ProductSubCategory = connection.define('product_sub_categories', {
    subCategoryCode: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoryCode:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

exports.connection = connection;

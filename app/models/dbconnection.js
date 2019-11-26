//conexion a la base de datos
let Sequelize = require('sequelize');

const connection = new Sequelize('jirethDataBase','postgres','casanueva4321',{
    host:'database-1.cp7bc7sru879.us-east-2.rds.amazonaws.com',
    dialect:'postgres',
    port:5432,
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
},{
    connection,
    modelName: 'client'
    // options
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
},{
    connection,
    modelName: 'worker'
    // options
});

exports.Product = connection.define('product', {
    productCode: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoryId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{
    connection,
    modelName: 'product'
    // options
});


exports.connection = connection;

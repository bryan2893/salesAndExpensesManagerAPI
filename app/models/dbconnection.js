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

exports.Client = connection.define('clients', {
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

exports.Worker = connection.define('workers', {
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

exports.ProductCategory = connection.define('product_categories', {
    categoryCode: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

exports.Product = connection.define('products', {
    productCode: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type:Sequelize.FLOAT,
        allowNull: false
    },
    subCategoryCode:{
        type:Sequelize.INTEGER,
        allowNull: false
    }
});

exports.SaleInvoice = connection.define('saleInvoices', {
    workerId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    invoiceCode: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    dateOfCreation: {
        type:Sequelize.DATE,
        allowNull: false
    },
    toCarryOut:{
        type:Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    pending:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },
    clientId:{
        type:Sequelize.STRING
    },
    clientName:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

exports.SaleDetail = connection.define('saleDetails', {
    invoiceCode: {
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    detailNumber: {
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    productCode: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

//********** ASSOCIATIONS ************/



exports.connection = connection;

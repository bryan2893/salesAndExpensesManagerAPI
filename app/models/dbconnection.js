//conexion a la base de datos
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = new Sequelize(process.env.DB_NAME,
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

class Client extends Model{}
Client.init({
    //Attributes
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
    //Options
    sequelize,
    modelName: 'clients'
});

class Worker extends Model{}
Worker.init({
    //Attributes
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
    //Options
    sequelize,
    modelName: 'workers'
});

class ProductSubCategory extends Model{}
ProductSubCategory.init({
    //Attributes
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
},{
    //Options
    sequelize,
    modelName: 'product_sub_categories'
});

class ProductCategory extends Model{}
ProductCategory.init({
    //Attributes
    categoryCode: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    //Options
    sequelize,
    modelName: 'product_categories'
});

class Product extends Model{}
Product.init({
    //Attributes
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
},{
    //Options
    sequelize,
    modelName: 'products'
});

class SaleInvoice extends Model{}
SaleInvoice.init({
    //Attributes
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
},{
    //Options
    sequelize,
    modelName: 'saleInvoices'
});

class SaleDetail extends Model{}
SaleDetail.init({
    //Attributes
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
},{
    //Options
    sequelize,
    modelName: 'saleDetails'
});

//********** ASSOCIATIONS ************/



module.exports = {sequelize,Client,Worker,ProductSubCategory,ProductCategory,
Product,SaleInvoice,SaleDetail}

//exports.connection = connection;

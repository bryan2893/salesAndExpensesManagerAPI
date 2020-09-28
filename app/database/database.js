//conexion a la base de datos
const Sequelize = require('sequelize');

module.exports = new Sequelize(process.env.DB_NAME,
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
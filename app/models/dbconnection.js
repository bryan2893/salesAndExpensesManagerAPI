//conexion a la base de datos
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'casanueva4321',
    database: 'jehova_jireth_manager',
    insecureAuth: true
});

/*
connection.connect((err)=>{
    if (!err){
        console.log("conexion a mysql exitosa!");
    }
});
*/

module.exports = connection;
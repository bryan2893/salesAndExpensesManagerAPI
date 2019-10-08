//conexion a la base de datos
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'casanueva@4321',
    database: 'jehova_jireth_store',
    insecureAuth: true
});

module.exports = connection;
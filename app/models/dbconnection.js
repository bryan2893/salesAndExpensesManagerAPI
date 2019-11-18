//conexion a la base de datos
var mysql = require('mysql');

const configVariables = require("../../configuration");
const dbCredentials = configVariables.DB_CREDENTIALS;
var connection = mysql.createConnection(dbCredentials);

module.exports = connection;
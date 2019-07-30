/*Se comunican con la base de datos para manipular 
informacion relacionada con comidas especificamente
*/
let connection = require('./dbconnection');

//Extrae todas las comidas registradas...
exports.getAllFoods = () => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM comidas';
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

//Se busca una comida especificamente por su id...
exports.getFood = (foodId) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM comidas WHERE id = ' + connection.escape(foodId);
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};
/*Se comunican con la base de datos para manipular 
informacion relacionada con comidas especificamente
*/
let connection = require('./dbconnection');

//Extrae todas las comidas registradas...
exports.getAllFoods = () => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM productos';
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

//Se busca una comida especificamente por su id...
exports.getFood = (foodId) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM productos WHERE idproducto = ' + connection.escape(foodId);
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.saveFood = (foodDTO)=>{
    return new Promise((resolve,reject)=>{
        let sql    = `INSERT INTO productos (nombre,precio,categoria) values ? `;
        let values = [[foodDTO.nombre,foodDTO.precio,foodDTO.categoria]];

        connection.query(sql, [values] ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });

    });
};

exports.deleteFood = (foodId)=>{
    return new Promise((resolve,reject)=>{
        let sql = "DELETE FROM productos WHERE idproducto = ?";

        connection.query(sql, foodId ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.updateFood = (foodDTO)=>{

    //Hacer la logica para actualizar!!
    return new Promise((resolve,reject)=>{
        
        let sql = `UPDATE productos
           SET nombre = ?,
           precio = ?,
           categoria = ? 
           WHERE idproducto = ?`;

        let data = [foodDTO.nombre,foodDTO.precio,foodDTO.categoria,foodDTO.id];

        connection.query(sql, data ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};
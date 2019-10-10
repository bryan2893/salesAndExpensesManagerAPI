/*Se comunican con la base de datos para manipular 
informacion relacionada con comidas especificamente
*/
let connection = require('./dbconnection');

//Extrae todos los productos registrados...
exports.getAllProducts = () => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM products';
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

//Se busca un producto especificamente por su id...
exports.getProduct = (productId) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM products WHERE productCode = ' + connection.escape(productId);
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results[0]);
        });
    });
};

exports.saveProduct = (productDTO)=>{
    return new Promise((resolve,reject)=>{
        let sql    = `INSERT INTO products (name,category) values ? `;
        let values = [[productDTO.name,productDTO.category]];

        connection.query(sql, [values] ,function (error, results, fields) {
            if (error) reject(error);
            productDTO.productCode = results.insertId;
            resolve(productDTO);
        });
    });
};

exports.deleteProduct = (productId)=>{
    return new Promise((resolve,reject)=>{
        this.getProduct(productId).then((product)=>{
            if(product){
                let sql = "DELETE FROM products WHERE productCode = ?";
                connection.query(sql, productId ,function (error, results, fields) {
                    if (error) reject(error);
                    resolve(product);
                });
            }else{
                resolve({message:"product not found!"});
            }

        }).catch((error)=>{
            resolve(error);
        });

    });
};

exports.updateProduct = (productDTO)=>{
     
    return new Promise((resolve,reject)=>{

        this.getProduct(productDTO.productCode).then((product)=>{
            if(product){
                let sql = `UPDATE products
                            SET name = ?,
                            category = ? 
                            WHERE productCode = ?`;

                let data = [productDTO.name,productDTO.category,productDTO.productCode];

                connection.query(sql, data ,function (error, results, fields) {
                    if (error) reject(error);
                    resolve(product);
                });
            }else{
                resolve({message:"product not found!"})
            }
        }).catch((error)=>{
            reject(error);
        });

    });

};

exports.getProductsByCategory = (category)=>{

    return new Promise((resolve,reject)=>{
        let sql = `SELECT * FROM products
           WHERE category = ?`;

        let data = [category];

        connection.query(sql, data ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });

    });

};
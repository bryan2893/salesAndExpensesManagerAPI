let connection = require('./dbconnection');

//Extrae todos los productos registrados...
exports.getAllProductVarieties = () => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM productvarieties';
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

//Se busca un producto especificamente por su id...
exports.getProductVariety = (varietyId) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM productvarieties WHERE varietyId = ' + connection.escape(varietyId);
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results[0]);
        });
    });
};

//Se busca un producto especificamente por su id...
exports.getProductVarietiesOfAproduct = (productId) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM productvarieties WHERE productId = ' + connection.escape(productId);
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.saveProductVariety = (productVarietyDTO)=>{
    return new Promise((resolve,reject)=>{
        let sql    = `INSERT INTO productvarieties (productId,name,price) values ? `;
        let values = [[productVarietyDTO.productId,productVarietyDTO.name,productVarietyDTO.price]];

        connection.query(sql, [values] ,function (error, results, fields) {
            if (error) reject(error);
            productVarietyDTO.varietyId = results.insertId;
            resolve(productVarietyDTO);
        });
    });
};

exports.deleteProductVariety = (varietyId)=>{
    return new Promise((resolve,reject)=>{
        this.getProductVariety(varietyId).then((productVariety)=>{
            if(productVariety){
                let sql = "DELETE FROM productvarieties WHERE varietyId = ?";
                connection.query(sql,varietyId ,function (error, results, fields) {
                    if (error) reject(error);
                    resolve(productVariety);
                });
            }else{
                resolve({message:"product variety not found!"});
            }
        }).catch((error)=>{
            resolve(error);
        });

    });
};

exports.updateProductVariety = (productVarietyDTO)=>{

    return new Promise((resolve,reject)=>{

        this.getProductVariety(productVarietyDTO.varietyId).then((productVariety)=>{
            if(productVariety){
                let sql = `UPDATE productvarieties
                            SET productId = ?, 
                            name = ?,
                            price = ? 
                            WHERE varietyId = ?`;

                let data = [productVarietyDTO.productId,productVarietyDTO.name,productVarietyDTO.price,productVarietyDTO.varietyId];

                connection.query(sql, data ,function (error, results, fields) {
                    if (error) reject(error);
                    resolve(productVariety);
                });

            }else{
                resolve({message:"Product variety not found!"})
            }
        }).catch((error)=>{
            reject(error);
        });

    });

};
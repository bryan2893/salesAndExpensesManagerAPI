let connection = require('./dbconnection');

exports.getAllProductCategories = () => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM productcategories';
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.getProductCategory = (categoryId) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM productcategories WHERE categoryId = ' + connection.escape(categoryId);
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results[0]);
        });
    });
};

exports.saveProductCategory = (productCategoryDTO)=>{
    return new Promise((resolve,reject)=>{
        let sql    = `INSERT INTO productcategories (name) values ? `;
        let values = [[productCategoryDTO.name]];

        connection.query(sql, [values] ,function (error, results, fields) {
            if (error) reject(error);
            productCategoryDTO.categoryId = results.insertId;
            resolve(productCategoryDTO);
        });

    });
};

exports.deleteProductCategory  = (categoryId)=>{
    return new Promise((resolve,reject)=>{
        this.getProductCategory(categoryId).then((category)=>{
            if(category){
                let sql = "DELETE FROM productcategories WHERE categoryId = ?";

                connection.query(sql, categoryId ,function (error, results, fields) {
                    if (error) reject(error);
                    resolve(category);
                });
            }else{
                resolve({message:"product category not found!"});
            }
        }).catch((error)=>{
            reject(error);
        });

    });
};

exports.updateProductCategory = (productCategoryDTO)=>{

    return new Promise((resolve,reject)=>{
        this.getProductCategory(productCategoryDTO.categoryId).then((category)=>{
            if(category){
                let sql = `UPDATE productcategories
                SET name = ?
                WHERE categoryId = ?`;

                let data = [productCategoryDTO.name,productCategoryDTO.categoryId];

                connection.query(sql, data ,function (error, results, fields) {
                    if (error) reject(error);
                    resolve(category);
                });
            }else{
                resolve({message:"category not found!"});
            }
        }).catch((error)=>{
            reject(error);
        });

    });
};
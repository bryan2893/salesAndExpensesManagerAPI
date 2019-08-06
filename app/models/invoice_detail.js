/*Se comunican con la base de datos para manipular 
informacion relacionada con comidas especificamente
*/
let connection = require('./dbconnection');

exports.getInvoiceDetails = (num_factura) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT num_detalle,cod_producto,nombre,precio_unitario,cantidad,codigo_categoria,categoria_producto '+
        'FROM ventas WHERE num_factura = ' + connection.escape(num_factura);

        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};
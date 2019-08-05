/*Se comunican con la base de datos para manipular 
informacion relacionada con comidas especificamente
*/
let connection = require('./dbconnection');

exports.getAllSalesInvoice = () => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT facturas_venta.num_factura,trabajadores.nombre_completo as trabajador,facturas_venta.fecha,facturas_venta.nombre_cliente '+
        'FROM facturas_venta INNER JOIN trabajadores WHERE facturas_venta.cedula_emisor = trabajadores.cedula';
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.getSaleInvoice = (num_factura) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT facturas_venta.num_factura,trabajadores.nombre_completo as trabajador,facturas_venta.fecha,facturas_venta.nombre_cliente '+
        'FROM facturas_venta INNER JOIN trabajadores WHERE (facturas_venta.cedula_emisor = trabajadores.cedula) and facturas_venta.num_factura = ' + connection.escape(num_factura);
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.saveSaleInvoice = (salesInvoiceDTO)=>{
    //El parametro 'detalles' es un objeto json el cual es una lista de detalles de la factura. 'detalles es pasado'
    //por la funcion JSON.stringify() para que pueda ser reconocido por la base de datos.
    return new Promise((resolve,reject)=>{
        let sql    = `CALL guardarFacturaVenta(?,?,?,?)`;
        let values = [salesInvoiceDTO.cedula_emisor,salesInvoiceDTO.fecha,salesInvoiceDTO.nombre_cliente,salesInvoiceDTO.detalles_factura];

        connection.query(sql, values ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.deleteSaleInvoice = (num_factura)=>{
    return new Promise((resolve,reject)=>{
        let sql = "DELETE FROM facturas_venta WHERE num_factura = ?";

        connection.query(sql, num_factura ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};
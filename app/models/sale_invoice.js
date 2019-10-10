let connection = require('./dbconnection');

exports.getAllSalesInvoice = () => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM saleinvoices';
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.getSaleInvoice = (num_factura) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM saleinvoices WHERE invoiceNumber = ' + connection.escape(num_factura);
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
        let sql    = `CALL SAVE_SALE_INVOICE(?,?,?,?,?,?,?,?)`;
        let values = [salesInvoiceDTO.cedula_emisor,salesInvoiceDTO.fecha,salesInvoiceDTO.nombre_cliente,salesInvoiceDTO.detalles,salesInvoiceDTO.para_llevar,salesInvoiceDTO.estado,salesInvoiceDTO.id_cliente,salesInvoiceDTO.detalles_factura];

        connection.query(sql, values ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
        
    });
};

exports.deleteSaleInvoice = (num_factura)=>{
    return new Promise((resolve,reject)=>{
        let sql = "DELETE FROM saleinvoices WHERE invoiceNumber = ?";

        connection.query(sql, num_factura ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

/*
Para obtener el numero de páginas se divide la 'cantidad total de registros' / 'cantidad por página'.
si hay residuo en la division se debe sumar una página mas.
*/
exports.getAllSalesInvoiceByPagination = (pageRequest,limit)=>{
    return new Promise((resolve,reject)=>{
        if(pageRequest < 1){
            pageRequest = 1;
        }
        if(pageRequest < 1){
            reject(new Error("El limite de registros debe ser 1 o mayor a 1 !"));
        }

        let offSet = (pageRequest-1) * limit;

        let sql = "SELECT * FROM saleinvoices LIMIT ?,?";

        connection.query(sql, [offSet,limit] ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
        
    });
};

exports.getAllSalesInvoiceByDateRangeAndPagination = (date_from,date_to,pageRequest,limit)=>{
    return new Promise((resolve,reject)=>{
        if(pageRequest < 1){
            pageRequest = 1;
        }

        let offSet = (pageRequest-1) * limit;
        let dateFrom = null;
        let dateTo = null;
        
        try{
            dateFrom = new Date(date_from);
            dateTo = new Date(date_to);
        }catch(error){
            reject(new Error(error.message));
        }

        if(dateFrom > dateTo){
            reject(new Error("Asegurese que la primer fecha sea menor a la segunda en el url!"));
        }

        let sql = `SELECT * FROM saleinvoices WHERE date BETWEEN ? AND ? LIMIT ?,?`;

        connection.query(sql, [date_from,date_to,offSet,limit] ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });

    });
};

exports.getAllSalesInvoiceByEmisorAndPagination = (emisor_id,pageRequest,limit)=>{
    return new Promise((resolve,reject)=>{
        if(pageRequest < 1){
            pageRequest = 1;
        }

        let offSet = (pageRequest-1) * limit;

        let sql = `SELECT * FROM saleinvoices WHERE workerId = ? LIMIT ?,?`;

        connection.query(sql, [emisor_id,offSet,limit] ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.getAllSalesInvoiceByEmisorDateRangeAndPagination = (emisor_id,date_from,date_to,pageRequest,limit)=>{
    return new Promise((resolve,reject)=>{
        if(pageRequest < 1){
            pageRequest = 1;
        }

        let offSet = (pageRequest-1) * limit;
        
        let dateFrom = null;
        let dateTo = null;
        try{
            dateFrom = new Date(date_from);
            dateTo = new Date(date_to);
        }catch(error){
            reject(new Error(error.message));
        }

        if(dateFrom > dateTo){
            reject(new Error("Asegurese que la primer fecha sea menor a la segunda en el url!"));
        }

        let sql = `SELECT * FROM saleinvoices WHERE workerId = ? AND (date BETWEEN ? AND ?) LIMIT ?,?`;

        connection.query(sql, [emisor_id,date_from,date_to,offSet,limit] ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
        
    });
};

exports.getSalesInvoiceByState = (state) => {
    return new Promise((resolve,reject)=>{
        let sql    = 'SELECT * FROM saleinvoices WHERE pending = ' + connection.escape(state);
        connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
};

exports.getSalesInvoiceByStateAndPaginate = (state,pageRequest,limit) => {
    return new Promise((resolve,reject)=>{

        if(pageRequest < 1){
            pageRequest = 1;
        }

        let offSet = (pageRequest-1) * limit;

        let sql    = `SELECT * FROM saleinvoices WHERE pending = ? LIMIT ?,?`;

        connection.query(sql, [state,offSet,limit] ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });

    });
};

exports.getSalesInvoiceByStateDateRangeAndPaginate = (state,date_from,date_to,pageRequest,limit) => {
    return new Promise((resolve,reject)=>{

        if(pageRequest < 1){
            pageRequest = 1;
        }

        let offSet = (pageRequest-1) * limit;
        
        let dateFrom = null;
        let dateTo = null;
        try{
            dateFrom = new Date(date_from);
            dateTo = new Date(date_to);
        }catch(error){
            reject(new Error(error.message));
        }

        if(dateFrom > dateTo){
            reject(new Error("Asegurese que la primer fecha sea menor a la segunda en el url!"));
        }

        let sql    = `SELECT * FROM saleinvoices WHERE pending = ? AND (date BETWEEN ? AND ?) LIMIT ?,?`;

        connection.query(sql, [state,dateFrom,dateTo,offSet,limit] ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
        
    });
};

exports.updateSaleInvoiceState = (state,num_factura) => {
    return new Promise((resolve,reject)=>{

        let sql    = `UPDATE saleinvoices SET pending = ? WHERE invoiceNumber = ?`;

        connection.query(sql, [state,num_factura] ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
        
    });
};

exports.getSalesInvoiceByClientDateRangeAndPaginate = (clientId,date_from,date_to,pageRequest,limit) => {

    return new Promise((resolve,reject)=>{

        if(pageRequest < 1){
            pageRequest = 1;
        }

        let offSet = (pageRequest-1) * limit;
        
        let dateFrom = null;
        let dateTo = null;
        try{
            dateFrom = new Date(date_from);
            dateTo = new Date(date_to);
        }catch(error){
            reject(new Error(error.message));
        }

        if(dateFrom > dateTo){
            reject(new Error("Asegurese que la primer fecha sea menor a la segunda en el url!"));
        }

        let sql    = `SELECT * FROM saleinvoices WHERE clientId = ? AND (date BETWEEN ? AND ?) LIMIT ?,?`;

        connection.query(sql, [clientId,date_from,date_to,offSet,limit] ,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });

    });
    
};
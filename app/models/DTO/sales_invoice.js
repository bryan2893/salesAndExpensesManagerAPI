class SALE_INVOICE{
    constructor(num_factura,cedula_emisor,fecha,nombre_cliente,detalles_factura){
        this.num_factura = num_factura;
        this.cedula_emisor = cedula_emisor;
        this.fecha = fecha;
        this.nombre_cliente = nombre_cliente;
        this.detalles_factura = detalles_factura;
    }
}

module.exports = SALE_INVOICE;
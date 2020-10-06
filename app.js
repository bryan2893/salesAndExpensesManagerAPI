let http = require('http');
let express = require('express');
let app = express();
let cors = require('cors');
/*
******Enviroment variables configuration******
*/
require('dotenv').config();

const dataBase = require('./app/database/database');

app.use(express.json());
app.use(cors());


//let auth_routes = require('./app/routes/auth_routes');
//let client_routes = require('./app/routes/client_routes');
//let worker_routes = require('./app/routes/worker_routes');
//let product_sub_category_routes = require('./app/routes/product_sub_category_routes');
//let product_category_routes = require('./app/routes/product_category_routes');
//let product_routes = require('./app/routes/product_routes');
let trabajadorRoutes = require('./app/routes/trabajador');
let rolRoutes = require('./app/routes/rol');
let clienteRoutes = require('./app/routes/cliente');
let facturaVentaRoutes = require('./app/routes/factura_venta');
let detalleFacturaVentaRoutes = require('./app/routes/detalle_factura_venta');
let productosRoutes = require('./app/routes/producto');
let categoriaProductosRoutes = require('./app/routes/categoria_producto');
let proveedorRoutes = require('./app/routes/proveedor');
let facturaCompraRoutes = require('./app/routes/factura_compra');
let materiaPrimaRoutes = require('./app/routes/materia_prima');
let detalleFacturaCompraRoutes = require('./app/routes/detalle_factura_compra');
let categoriaMateriaPrimaRoutes = require('./app/routes/categoria_materia_prima');
let unidadMedidaRoutes = require('./app/routes/unidad_medida');

//app.use(auth_routes);
//app.use(client_routes);
//app.use(worker_routes);
//app.use(product_sub_category_routes);
//app.use(product_category_routes);
//app.use(product_routes);
app.use(trabajadorRoutes);
app.use(rolRoutes);
app.use(clienteRoutes);
app.use(facturaVentaRoutes);
app.use(detalleFacturaVentaRoutes);
app.use(productosRoutes);
app.use(categoriaProductosRoutes);
app.use(proveedorRoutes);
app.use(facturaCompraRoutes);
app.use(materiaPrimaRoutes);
app.use(facturaCompraRoutes);
app.use(detalleFacturaCompraRoutes);
app.use(categoriaMateriaPrimaRoutes);
app.use(unidadMedidaRoutes);


dataBase.sync({force:true}).then(() => {
  dataBase
  .authenticate()
  .then(() => {
    http.createServer(app).listen(process.env.SERVER_PORT,function(){
        console.log("Listening on port "+ process.env.SERVER_PORT);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
});

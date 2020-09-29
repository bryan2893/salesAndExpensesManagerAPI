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

let http = require('http');
let express = require('express');
let app = express();
let cors = require('cors');
/*
******Enviroment variables configuration*****
*/
require('dotenv').config();

const dbConnection = require('./app/models/dbconnection').connection;

app.use(express.json());
app.use(cors());

//Se importan las rutas o endpoints de la api.
let auth_routes = require('./app/routes/auth_routes');
let client_routes = require('./app/routes/client_routes');
let worker_routes = require('./app/routes/worker_routes');
let product_sub_category_routes = require('./app/routes/product_sub_category_routes');
let product_category_routes = require('./app/routes/product_category_routes');
/*
let api_routes = require('./app/routes/api_routes');
let product_variety_routes = require('./app/routes/product_variety_routes');
let provider_routes = require('./app/routes/provider_routes');
let supplies_routes = require('./app/routes/supplie_routes');
let supplie_category_routes = require('./app/routes/supplie_category_routes');
let sale_invoice_routes = require('./app/routes/sale_invoice_routes');
let invoice_detail_routes = require('./app/routes/invoice_detail_routes');
*/

//se setean las rutas que el app debe usar.
app.use(client_routes);
app.use(worker_routes);
app.use(product_sub_category_routes);
app.use(auth_routes);
app.use(product_category_routes);
/*
app.use(api_routes);
app.use(product_routes);
app.use(product_variety_routes);
app.use(product_category_routes);
app.use(provider_routes);
app.use(supplies_routes);
app.use(supplie_category_routes);
app.use(sale_invoice_routes);
app.use(invoice_detail_routes);
*/

dbConnection.sync().then(() => {
  dbConnection
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

let http = require('http');
let express = require('express');
let app = express();
let confInfo = require('./configuration');
let cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
  }));
//app.use(express.urlencoded());

//Se importan las rutas o endpoints de la api.
let client_routes = require('./app/routes/client_routes');
let api_routes = require('./app/routes/api_routes');
let food_routes = require('./app/routes/food_routes');
let worker_routes = require('./app/routes/worker_routes');
let product_category_routes = require('./app/routes/product_category_routes');
let provider_routes = require('./app/routes/provider_routes');
let supplies_routes = require('./app/routes/supplie_routes');
let supplie_category_routes = require('./app/routes/supplie_category_routes');
let sales_invoice_routes = require('./app/routes/sales_invoice');
let invoice_detail_routes = require('./app/routes/invoice_detail_routes');
let auth_routes = require('./app/routes/auth_routes');

//se setean las rutas que el app debe usar.
app.use(client_routes);
app.use(api_routes);
app.use(food_routes);
app.use(worker_routes);
app.use(product_category_routes);
app.use(provider_routes);
app.use(supplies_routes);
app.use(supplie_category_routes);
app.use(sales_invoice_routes);
app.use(invoice_detail_routes);
app.use(auth_routes);

http.createServer(app).listen(confInfo.PORT,function(){
    console.log("Escuchando en el puerto "+confInfo.PORT);
});
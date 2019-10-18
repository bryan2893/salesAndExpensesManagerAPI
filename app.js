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
let product_routes = require('./app/routes/product_routes');
let product_variety_routes = require('./app/routes/product_variety_routes');
let worker_routes = require('./app/routes/worker_routes');
let product_category_routes = require('./app/routes/product_category_routes');
let provider_routes = require('./app/routes/provider_routes');
let supplies_routes = require('./app/routes/supplie_routes');
let supplie_category_routes = require('./app/routes/supplie_category_routes');
let sale_invoice_routes = require('./app/routes/sale_invoice_routes');
let invoice_detail_routes = require('./app/routes/invoice_detail_routes');
let auth_routes = require('./app/routes/auth_routes');

//se setean las rutas que el app debe usar.
app.use(client_routes);
app.use(api_routes);
app.use(product_routes);
app.use(product_variety_routes);
app.use(worker_routes);
app.use(product_category_routes);
app.use(provider_routes);
app.use(supplies_routes);
app.use(supplie_category_routes);
app.use(sale_invoice_routes);
app.use(invoice_detail_routes);
app.use(auth_routes);

const PORT = process.env.PORT || confInfo.PORT;

http.createServer(app).listen(PORT,function(){
    console.log("Listening on port "+ PORT);
});
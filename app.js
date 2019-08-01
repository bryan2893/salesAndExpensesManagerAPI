let http = require('http');
let express = require('express');
let app = express();
let confInfo = require('./configuration');

app.use(express.json());
//app.use(express.urlencoded());

//Se importan las rutas o endpoints de la api.
let api_routes = require('./app/routes/api_routes');
let food_routes = require('./app/routes/food_routes');
let worker_routes = require('./app/routes/worker_routes');

//se setean las rutas que el app debe usar.
app.use(api_routes);
app.use(food_routes);
app.use(worker_routes);

http.createServer(app).listen(confInfo.PORT,function(){
    console.log("Escuchando en el puerto "+confInfo.PORT);
});
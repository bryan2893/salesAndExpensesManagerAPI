let http = require('http');
let express = require('express');
let app = express();

app.use(express.json());
//app.use(express.urlencoded());

//Se importan las rutas o endpoints de la api.
let api_routes = require('./routes/api_routes');

app.use(api_routes);

const PORT = 3000;

http.createServer(app).listen(PORT,function(){
    console.log("Escuchando en el puerto "+PORT);
});
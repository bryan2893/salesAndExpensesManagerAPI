let express = require('express');
let router = express.Router();
 
//APP ENDPOINTS

router.get('/',(req,res)=>{
    res.status(200).send("API PARA EL SISTEMA DE INVENTARIO DE SODA JEHOVÁ JIRETH !");
});

router.get('/something',function(req,res){
    res.send("Algo pasa aqui!");
});


router.post('/prueba',(req,res)=>{
    console.log(req.body.nombre + " " + req.body.apellido);
    res.status(200).send("Every thing is ok !");
});

module.exports = router;
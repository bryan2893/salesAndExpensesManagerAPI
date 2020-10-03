const modeloProveedor = require('../models/proveedor');

exports.obtenerTodosLosProveedores = function(req,res){

    modeloProveedor.findAll().then((proveedores) => {
        res.status(200).send({status:200,proveedores:proveedores});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });

};

exports.crearNuevoProveedor = function(req,res){

    const informacionProveedor = req.body;

    modeloProveedor.create(informacionProveedor).then((proveedorCreado) => {
        res.status(200).send({status:200,proveedor:proveedorCreado});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });
    
};
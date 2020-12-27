const modeloPermiso = require('../models/permiso');

exports.crearPermiso = function(req,res){

    const {id_rol,nombre} = req.body;
    const permiso = {id_rol,nombre};

    modeloPermiso.create(permiso).then((permisoCreado) => {
        res.status(200).send({status:200,permiso:permisoCreado});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });

}

exports.obtenerPermisosDeUnRol = function(req,res){

    const id_rol = req.params.id_rol;

    modeloPermiso.findAll({where:{id_rol:id_rol}}).then((permisos) => {
        res.status(200).send({status:200,permisos:permisos});
    }).catch((error)=>{
        res.status(400).send({status:400,message:error.message});
    });

}
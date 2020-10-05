let jwt = require('jwt-simple');
let moment = require('moment');

exports.createToken = function(objetoTrabajador){

    let payload = {
        sub: objetoTrabajador.id_trabajador,
        name: objetoTrabajador.nombre_completo,
        //rol: objetoTrabajador.rol,
        iat: moment.unix(),
        exp: moment().add(1,"days").unix()
    };

    return jwt.encode(payload, process.env.SECRET || "otraLlaveQueNoSepan");
}
let jwt = require('jwt-simple');
let configFile = require('../../configuration');
let moment = require('moment');

/*
El objeto trabajador tiene esta estructura: 
{
    cedula:"...",
    nombre_completo:"...",
    fecha_ingreso:"...",
    admin:"...",
    password: "..."
}
*/
exports.createToken = function(worker){
    let payload = {
        sub: worker.workerId,
        name: worker.fullName,
        rol: worker.rol,
        iat: moment.unix(),
        exp: moment().add(1,"days").unix()
    };

    return jwt.encode(payload, configFile.SECRET_TOKEN); //retorna los datos del payload codificados.
}
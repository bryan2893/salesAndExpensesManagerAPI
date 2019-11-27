let jwt = require('jwt-simple');
let moment = require('moment');

exports.createToken = function(workerObject){

    let payload = {
        sub: workerObject.workerId,
        name: workerObject.fullName,
        rol: workerObject.rol,
        iat: moment.unix(),
        exp: moment().add(1,"days").unix()
    };

    return jwt.encode(payload, process.env.SECRET || "llaveHiperSecreta");
}
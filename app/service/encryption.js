const bcrypt = require('bcrypt');

exports.encriptarContraseña = function(contraseña){
    return bcrypt.hashSync(contraseña,3);
}

exports.compararContraseña = function(contraseña,hash){
    return bcrypt.compare(contraseña,hash);
}
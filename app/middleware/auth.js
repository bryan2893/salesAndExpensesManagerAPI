let jwt = require('jwt-simple');
let moment = require('moment');

let configFile = require('../../configuration');

exports.ensureAuthenticate = function(req,res,next){
    if(!req.headers.authorization){
        return res.status(403).send({mensaje:"Peticion sin cabecera de autorización!"});
    }
    
    let token = req.headers.authorization;
    let payload = null;
    try{
        payload = jwt.decode(token, configFile.SECRET_TOKEN);
    }catch(error){
        return res.status(403).send({mensaje:error.message});
    }
    

    if(payload.exp <= moment.unix()){
        return res.status(401).send({mensaje:"El token ha expirado!"});
    }

    req.worker = payload;
    next();
}
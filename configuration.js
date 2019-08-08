const configuration = {
    PORT : process.env.PORT || 3000,
    SECRET_TOKEN : process.env.SECRET_TOKEN || "casanueva432128932",
    DB_CREDENTIALS : {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'casanueva4321',
        database: 'jehova_jireth_manager',
        insecureAuth: true
    }
};

module.exports = configuration;
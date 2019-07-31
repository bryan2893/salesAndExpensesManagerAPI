const configuration = {
    PORT : process.env.PORT || 3000,
    SECRET : "jIRETH_FOREVER",
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
const mysql = require("mysql");
const env = require("../enviroment/enviroment")()

module.exports = function () {
    return function () {
        return mysql.createConnection(env.trampo);
    }
};
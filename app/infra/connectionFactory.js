const mysql = require("mysql");

module.exports = function () {
    return function () {
        return mysql.createConnection({
            user: "root",
            password: "",
            port: "3306",
            database: "loja_alura"
        });
    }
};
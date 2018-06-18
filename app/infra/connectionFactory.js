var mysql = require("mysql");
function createBDConnection() {
    return mysql.createConnection({
        user: "root",
        password: "",
        port: "3306",
        database: "loja_alura"
    });
}

module.exports = function () {
    return createBDConnection;
}
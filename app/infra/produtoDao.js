module.exports = function () {

    this.listar = function (callback) {
        var connectionFactory = require("./connectionFactory")();
        var con = connectionFactory();
        con.query("select * from livros", callback)
        con.end();

    }
    return this;
}

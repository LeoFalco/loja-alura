function ProdutoDao() {
    this.con = require('./Connection')()();
}

ProdutoDao.prototype.listar = function (callback) {
    this.con.query("select * from produto", callback)
};

ProdutoDao.prototype.adicionar = function (produto, callback) {
    this.con.query("insert produto set ?", produto, callback);
};

ProdutoDao.prototype.apagar = function (id, callback) {
    this.con.query("delete from produto where id = ?", id, callback);
};

module.exports = function () {
    return ProdutoDao;
};
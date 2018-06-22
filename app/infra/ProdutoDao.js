function ProdutoDao(connection) {
    this.con = connection;
}

ProdutoDao.prototype.listar = function (callback) {
    this.con.query("select * from produto", callback)
};

module.exports = function () {
    return ProdutoDao;
};

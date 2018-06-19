function ProdutoDao(connection) {
    this.con = connection;
}

ProdutoDao.prototype.listar = function (callback) {
    this.con.query("select * from livros", callback)
}

module.exports = function () {
    console.log(ProdutoDao)
    return ProdutoDao;
}

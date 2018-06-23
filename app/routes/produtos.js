module.exports = function (app) {

    app.get("/produtos", function (req, res) {
        const produtoDao = new app.infra.ProdutoDao();

        produtoDao.listar(function (err, result) {
            if (err) {
                throw err;
            }
            console.log("get");
            res.render("produtos/listar", { lista: result });
        });
    });

    app.post("/produtos", function (req, res) {
        var produto = req.body;
        console.log(produto);

        const produtoDao = new app.infra.ProdutoDao();

        produtoDao.adicionar(produto, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            res.send(result);
        });
    });

    app.delete("/produtos/:id", function (req, res) {
        var id = req.params.id;
        const produtoDao = new app.infra.ProdutoDao();

        produtoDao.apagar(id, function (err, result) {
            if (err) {
                throw err;
            }
            res.send();
        })
    });

    return app;
};
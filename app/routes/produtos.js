module.exports = function (app) {

    app.get("/produtos", function (req, res) {
        const produtoDao = new app.infra.ProdutoDao();

    
        produtoDao.listar(function (err, result) {
            if (err) {
                throw err;
            }

            res.format({
                html: function () {
                    res.render("produtos/listar", {lista: result});
                    console.log("get /produtos html " + result.length + " registros");
                },
                json: function () {
                    res.json(result);
                    console.log("get /produtos json " + result.length + " registros");
                }
            });
        });

        produtoDao.end();
    });

    app.post("/produtos", function (req, res) {
        const produto = req.body;

        const produtoDao = new app.infra.ProdutoDao();

        produtoDao.adicionar(produto, function (err, result) {
            if (err) {
                throw err;
            }

            produto.id = result.insertId;
            console.log("post /produtos " + JSON.stringify(produto));
            res.send(produto);
        });
    });

    app.delete("/produtos/:id", function (req, res) {
        const id = req.params.id;
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
module.exports = function (app) {
    // todo remove redirect
    app.get("/", function (req, res) {
        res.redirect("/produtos");
    })

    app.get("/produtos", function (req, res) {

        var connection = app.infra.connectionFactory();
        var produtoDao = new app.infra.ProdutoDao(connection);

        produtoDao.listar(function (err, result) {
            if (err) {
                throw err;
            }

            res.render("produtos/listar", { lista: result });
        })
    });

    app.post("/produtos", function (req, res) {
        console.log(req.body);
        res.json(req.body);
    });

    return app;
}
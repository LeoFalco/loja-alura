module.exports = function (app) {
    // todo remove redirect
    app.get("/", function (req, res) {
        res.redirect("/produtos");
    });

    app.get("/produtos", function (req, res) {

        const connection = app.infra.connectionFactory();
        const produtoDao = new app.infra.ProdutoDao(connection);

        console.log(app.infra);

        produtoDao.listar(function (err, result) {
            if (err) {
                throw err;
            }

            res.render("produtos/listar", {lista: result});
        })
    });

    app.post("/produtos", function (req, res) {
        console.log(req.body);
        res.json(req.body);
    });

    return app;
};
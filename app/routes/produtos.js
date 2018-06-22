module.exports = function (app) {

    app.get("/produtos", function (req, res) {
        const connection = app.infra.connectionFactory();
        const produtoDao = new app.infra.ProdutoDao(connection);

        produtoDao.listar(function (err, result) {
            if (err) {
                throw err;
            }
            res.render("produtos/listar", {lista: result});
        })
    });

    app.post("/produtos", function (req, res) {
        //console.log(req.body);
        //res.json(req.body);
        console.log(req.body);
        console.log("post produtos");
    });

    return app;
};
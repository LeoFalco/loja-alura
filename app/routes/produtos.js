module.exports = function (app) {
    // todo remove redirect
    app.get("/", function (req, res) {
        res.redirect("/produtos");
    })

    app.get("/produtos", function (req, res) {

        var data = new Date().toISOString();
        console.log(data + " GET /produtos")

        var produtoDao = app.infra.produtoDao;

        produtoDao.listar(function (err, result) {
            if (err) {
                throw err;
            }
            
            res.render("produtos/listar", { lista: result });
        })
    });
    return app;
}
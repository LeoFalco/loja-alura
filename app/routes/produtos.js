
module.exports = function (app) {

    // todo remove redirect
    app.get("/", function (req, res) {
        res.redirect("/produtos");
    })

    app.get("/produtos", function (req, res) {

        var data = new Date().toISOString();
        console.log(data + " GET /produtos")

        var mysql = require("mysql");
        var con = mysql.createConnection({
            user: "root",
            password: "",
            port: "3306",
            database: "loja_alura"
        });

        con.query("select * from livros", function (err, result) {
            if (err) {
                throw err;
            }

            /*
            res.header("Content-Type", 'application/json');
            res.send(JSON.stringify(result, null, 4));
            */
            console.log(result);
            res.render("produtos/listar", { lista: result });
            con.end();
        })
    });
    return app;
}
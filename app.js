var app = require("./config/express")();
var rotasProdutos = require("./app/routes/produtos")(app);

let port = 3000;
app.listen(port, function () {
    console.log(`server running at http://localhost:${port}`);
});
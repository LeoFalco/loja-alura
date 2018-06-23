const express = require("express");
const load = require("express-load");
const bodyParser = require('body-parser');

module.exports = function () {
    const app = express();

    // definir bodyparser antes das rotas
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
    app.use(bodyParser.json());

    load("routes", { cwd: "app" })
        .then("infra")
        .into(app);

    app.set("view engine", "ejs");
    app.set("views", "./app/views");


    return app;
};
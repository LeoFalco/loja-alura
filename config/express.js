var express = require("express");
var load = require("express-load");

module.exports = function () {
    var app = express();
    load("routes", { cwd: "app" })
        .then("infra").into(app)
    app.set("view engine", "ejs");
    app.set("views", "./app/views");
    return app;
}
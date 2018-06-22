const express = require("express");
const load = require("express-load");
const bodyParser = require('body-parser');

module.exports = function () {
    const app = express();
    load("routes", { cwd: "app" })
        .then("infra")
        .into(app);

    app.set("view engine", "ejs");
    app.set("views", "./app/views");

    app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
    return app;
};
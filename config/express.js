const express = require("express");
const load = require("express-load");
const bodyParser = require('body-parser');
const cors = require('cors');


module.exports = function () {
    const app = express();

    app.use(cors());
    /*
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.header("Access-Control-Allow-Methods", "GET", "PUT", "POST", "DELETE", "OPTIONS");
        next();
    });
    */
    // definir bodyparser antes das rotas
    app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
    app.use(bodyParser.json());


    load("routes", {cwd: "app"})
        .then("infra")
        .into(app);

    app.set("view engine", "ejs");
    app.set("views", "./app/views");


    return app;
};
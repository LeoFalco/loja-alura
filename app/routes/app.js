module.exports = function (app) {
    // todo remove redirect
    app.get("/", function (req, res) {
        res.redirect("/produtos");
    });
};
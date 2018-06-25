module.exports = function (app) {
    // todo remove redirect
    app.get("/", function (req, res) {

        console.log("get / redrecting to /produtos" );
        res.redirect("/produtos");
    });
};
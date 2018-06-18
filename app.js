var app = require("./config/express")();

let port = 3000;
app.listen(port, function () {
    console.log(`server running at http://localhost:${port}`);
});
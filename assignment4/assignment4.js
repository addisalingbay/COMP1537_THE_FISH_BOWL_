
const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");
const path = require("path");

app.use("/js", express.static(path.join(__dirname, "public/js")));
app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/img", express.static(path.join(__dirname, "public/img")));

app.get("/", function (req, res) {
    let doc = fs.readFileSync(path.join(__dirname, "app/html/index.html"), "utf8");
    res.send(doc);
});

app.use(function (req, res, next) {
    res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
});

let port = 8000;
app.listen(port, function () {
    console.log("Example app listening on port " + port + "!");
});

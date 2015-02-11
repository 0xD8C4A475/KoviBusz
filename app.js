/*global require, __dirname */
/*jslint unparam: true, sloppy: true, vars: true */

var express = require("express"),
    app = express(),
    server,
    FutarRequest = require("./FutarRequest");

app.get('/', function (req, res) {
    res.header("X-Frame-Options", "ALLOWALL");

    var request = new FutarRequest();

    request.getResponse(function (response) {
        res.send(response);
    })
});

app.use('/images', express.static(__dirname + '/assets/images'));
app.use('/css', express.static(__dirname + '/assets/css'));

server = app.listen(process.env.PORT || process.argv[2] || 3000, function () {
    console.log("[app] start - port:%s", server.address().port);
})

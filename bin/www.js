var app = require("../app");
var http = require("http");
var config = require("../configure/default");
var port = config.nodeServer.port;
app.set('port', port);
var server = http.createServer(app);
server.listen(port);
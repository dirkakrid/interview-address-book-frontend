var restify = require('restify');
var connect = require('connect');
var contacts = require('./contacts');

function respond(req, res, next) {
    res.send(contacts);
}

var apiServer = restify.createServer();
apiServer.get('/contacts', respond);

module.exports = apiServer;

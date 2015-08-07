var restify = require('restify');
var connect = require('connect');

function respond(req, res, next) {
    var contacts = [
        {
            name: 'Amy Mitchell'
        }
    ];

    res.send(contacts);
}

var apiServer = restify.createServer();
apiServer.get('/contacts', respond);

module.exports = apiServer;

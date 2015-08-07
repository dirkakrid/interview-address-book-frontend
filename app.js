var restify = require('restify');

function contacts(req, res, next) {
    res.send('contacts');
}

var server = restify.createServer();
server.get('/contacts', contacts);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

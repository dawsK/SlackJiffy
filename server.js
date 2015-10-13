
var port = process.env.PORT || 1337;
var baseHost = process.env.WEBSITE_HOSTNAME || 'localhost';

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var swaggerize = require('swaggerize-express');

var app = express();

var server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(swaggerize({
    api: require('./api.json'),
    docspath: '/swagger',
    handlers: './handlers'
}));

app.use('/', express.static(__dirname + '/html'));

server.listen(port, 'localhost', function () {
  var address = server.address();  
  if (baseHost === 'localhost')
  {
    app.swagger.api.host = baseHost + ':' + address.port;
  } else {
    app.swagger.api.host = baseHost;
  }
  console.log("Server started ..");
});

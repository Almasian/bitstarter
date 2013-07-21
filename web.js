var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
buf = new buffer(128);

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  buf = fs.readFileSync('./bitstarter/index.html');
  response.send(buf.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //var textWeb = fs.readFileSync('index.html', 'utf-8');
  var bufferWeb = fs.readFileSync('index.html');
  var textWeb = bufferWeb.toString();
  response.send(textWeb);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

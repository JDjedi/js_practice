


// var http = require('http');
// var host = '127.0.0.1';
// var port = 3000;
// const identifier = 'http://localhost:3000';

// var jd_server = http.createServer(function(req, res) {
// 	res.statusCode = 200;
// 	res.setHeader('Content-Type', 'text/plain');
// 	res.end('Hello World!')
// });

// jd_server.listen(port, host, identifier, function() {
// 	console.log("Listening on " + identifier);
// });


var http = require('http');
var fs = require('fs');
var port = 3000;
var host = 'localhost';


var server = http.createServer(function(req, res) {
  fs.readFile('./index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      res.writeHead(200, {"Content-Type": "text/html"});
      data = data.replace("{{ req }}", myReq);
      data = data.replace("{{ res }}", myRes);
      res.end(data);
    }
  });
});


server.listen(port, host, function() {
  console.log(`Listening at http://${ host }:${ port }`);
});


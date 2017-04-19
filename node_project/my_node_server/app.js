


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
      let myReq = {};
      ["url", "method", "httpVersion", "headers"].forEach( (key) => {
        myReq[key] = req[key];
      });
      myReq = JSON.stringify(myReq, null, 2);
      let myRes = {};
      ["statusMessage", "statusCode", "_header"].forEach( (key) => {
        myRes[key] = res[key];
      });
      myRes = JSON.stringify(myRes, null, 2);

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


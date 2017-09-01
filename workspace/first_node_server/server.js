
var http = require('http');
var fs = require('fs');

var port = 3000;
var host = 'localhost';

var server = http.createServer(function(req, res) {
	fs.readFile('./index.html', 'utf8', function(err, data) {
		if (err) {
			res.writeHead(404);
			res.end("Error 404, not found");
		} else {
			res.writeHead(200, {
				"Content-Type": "text/html",
				"Content": "Hello World"
			});
		}
		res.end(data); //what does this do?
	});
});

server.listen(port, host, function() {
	console.log(`listening at http://${ host }:${ port }`)
});

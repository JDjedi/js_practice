// const express = require('express');
// const app = express();
// var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(express.static('public'));

// app.get('/index.html', function (req, res) {
// 	res.sendFile( __dirname + "/" + "index.html");
// })

// app.get('/process_get', urlencodedParser, function (req, res) {
// 	response = {
// 		first_name:req.query.first_name,
// 		last_name:req.query.last_name
// 	}
// 	console.log(response);
// 	res.end(JSON.stringify(response));
// })

// var server = app.listen(8081, function() {
// 	console.log('App is running');
// })


var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/public/images'}));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/file_upload', function (req, res) {
   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);
   var file = __dirname + "/" + req.files.file.name;
   
   fs.readFile( req.files.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){
            console.log( err );
            }else{
               response = {
                  message:'File uploaded successfully',
                  filename:req.files.file.name
               };
            }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})









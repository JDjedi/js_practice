const express = require('express');
const app = express();

// app.get('/', function (req, res) {
// 	res.send('Hello Viking')
// })

app.get('/names/:name', function (req, res) {
	const name = req.params.name;
	res.send('Hello ' + name);
})

app.listen(3000, function() {
	console.log('App is running');
})
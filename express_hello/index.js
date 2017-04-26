const express = require('express');
const app = express();

app.set('view engine', 'hbs');

app.use(express.static("public"))

app.get('/', function (req, res) {
	const name = req.params.name;
	res.render('hello', {name: "Guest"});
})

app.get('/names/:name', function (req, res) {
  const name = req.params.name;
  res.render('hello', { name: name })
})

app.use(function (req, res, next) { //middleware function
  console.log(req.url + " — " + new Date())
  next()
})

app.listen(3000, function() {
	console.log('App is running');
})
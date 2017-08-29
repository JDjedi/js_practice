var fs = require('fs');
var path = './data/lorem.txt';

fs.readFile(path, 'utf8', function(err, data) {
  err ? console.log(err) : console.log(data);
})

fs.writeFile('./data/test.txt', "Dude where is my... ", function(err, data) {
  if (err) throw err;
})

fs.appendFile('./data/test.txt', "car!?", function(err) {
  if (err) throw err;
})

fs.readFile('./data/test.txt', 'utf8', function(err, data) {
  err ? console.log(err) : console.log(data);
})


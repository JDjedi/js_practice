var p = Promise.resolve("Hello Promise!");

setTimeout(function(timer){
	p.then(function(message) {
		console.log(message);
	});
}, timer);

var delay = function(timer){
	return new Promise(function(resolve) {
		setTimeout(function() {resolve(timer);}, timer);
	});
}

var countdown = function(result) {
	console.log(result);
	return delay(result - 100);
}

delay(3000)
	.then(countdown)
	.then(countdown)
	.then(countdown)
	.then(countdown);

var numbersToBeMapped = [1,2,3,4,5,7,8];
var squared = function(number) {
	return new Promise(function(resolve, reject) {
		if (isNaN(number)) {
			reject('The number you entered is not a number; NaN error');
		} else {
			resolve(Math.pow(number, 2));
		}
	});
}

numbersSquared = numbersToBeMapped.map(function(i) {
	return Promise.resolve(squared(i))
})

Promise.all(numbersSquared)
	.then(function(results) {
		console.log(results);
	})
	.then(function() {
		console.log('The process is complete!')
	});


var falsyValues = [false, 0, "", null, undefined, NaN];
var doBadThing = function(forRealz) {
	return new Promise(function(resolve, reject) {
		if (forRealz != false) {
			resolve('Yay!');
		}
	});
}

falseChecker = falsyValues.map(function(i) {
	return Promise.resolve(doBadThing(i));
})

Promise.all(falseChecker) 
	.then(function(result) {
		console.log(result);
	})

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















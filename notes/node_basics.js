

// Basic Promise 
var p = Promise.resolve('Hey I think this is working');

p.then(function(message) {
  console.log(message);
  return message;
  })
    .then(function() {
      console.log('Second message!');
    })
      .then(function() {
        console.log('Third message!')
});



// Promise control flow
var testEven = new Promise(function(resolve, reject) {
	if (Date.now() % 2 === 0) {
		resolve('Even');
	} else {
		reject('Odd');
	}
});

testEven.then(function(result) {
		console.log(result);
})
	.catch(function(err) {
		console.error(err);
});



// Resolve multiple promises with promise.all
var nums = [1, 2, 3, 4, 5];
nums = nums.map(function(i) {
	return Promise.resolve(i + 2);
});

Promise.all(nums)
	.then(function(results) {
		console.log(results);
	})
	.then(function() {
		console.log('process is complete')
	});



// Async callback
var fs = require('fs');
var path = './lorem.txt';

fs.readFile(path, 'utf8', function(err, data) {
  err ? console.error(err) : console.log(data); //checks for erro first and if none given, proceeds
});

console.log('Done!') //gets to here and then return call back function above











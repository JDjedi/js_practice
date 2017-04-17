// var p = Promise.resolve("Hello Promise!");

// setTimeout(function(timer){
// 	p.then(function(message) {
// 		console.log(message);
// 	});
// }, timer);

// var delay = function(timer){
// 	return new Promise(function(resolve) {
// 		setTimeout(function() {resolve(timer);}, timer);
// 	});
// }

// var countdown = function(result) {
// 	console.log(result);
// 	return delay(result - 100);
// }

// delay(3000)
// 	.then(countdown)
// 	.then(countdown)
// 	.then(countdown)
// 	.then(countdown);

// var numbersToBeMapped = [1,2,3,4,5,7,8];
// var squared = function(number) {
// 	return new Promise(function(resolve, reject) {
// 		if (isNaN(number)) {
// 			reject('The number you entered is not a number; NaN error');
// 		} else {
// 			resolve(Math.pow(number, 2));
// 		}
// 	});
// }

// numbersSquared = numbersToBeMapped.map(function(i) {
// 	return Promise.resolve(squared(i))
// })

// Promise.all(numbersSquared)
// 	.then(function(results) {
// 		console.log(results);
// 	})
// 	.then(function() {
// 		console.log('The process is complete!')
// 	})
// ;

var doBadThing = function(forRealz) {
	return new promise(function(resolve, reject) {
		if (forRealz != true) {
			resolve('Yay!');
		}
	})
}

doBadThing(NaN);



















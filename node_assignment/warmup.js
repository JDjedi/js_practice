// var p = Promise.resolve("Hello Promise!");

// setTimeout(function(timer){
// 	p.then(function(message) {
// 		console.log(message);
// 	});
// }, timer);

var delay = function(timer){
	return new Promise(function(resolve) {
		setTimeout(function() {console.log(timer);}, timer);
		resolve();
	});
}

var countdown = function() {
	return Promise.resolve(timer - 100);
}



delay(3000)
	.then(countdown)
	.then(countdown)
	.then(countdown)
	.then(countdown);

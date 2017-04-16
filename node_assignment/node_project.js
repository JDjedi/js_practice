// var p = Promise.resolve("Hello Promise!");

// setTimeout(function(timer){
// 	p.then(function(message) {
// 		console.log(message);
// 	});
// }, timer);

var delay = function(timer) {
	return new Promise(function() {
		setTimeout(function(timer){
			console.log('It works');
		}, timer);
	});
}

var countdown = function(timer) {
	console.log(parseInt(timer) - 100);
};


delay(3000).then(countdown);



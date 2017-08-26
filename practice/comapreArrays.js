
"use strict";

function compareArrays(arrayOne, arrayTwo) {
	var arrayTwoWorker;
	var arrayTestCase = [];

	if (arrayOne.length != arrayTwo.length) {
		debug(false);
	  return false;
	}
		
	arrayOne.forEach(function(x){
		arrayTwoWorker = arrayTwo.shift()
		if (x != arrayTwoWorker) {
			arrayTestCase.push(false);
		} else {
			arrayTestCase.push(true);
		}
	});

	arrayTestCase.some(arrayIsFalse);
}

function arrayIsFalse(element, index, array) {
	if (element != true) {
		debug(false);
		return false;
	}
}


compareArrays([5, 5, 5, 5], [5, 5, 5, 5]);


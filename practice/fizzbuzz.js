
"use strict";

function fizzbuzz(input) {

	var array = []

	while (input > 0){
		array.push(input);
		input -= 1;
	}

	array.forEach(function(arrayIndex) {
		if ((arrayIndex % 3 == 0) && (arrayIndex % 5 == 0)) {
			debug("FIZZBUZZ");
		} else if (arrayIndex % 3 == 0) {
			debug("FIZZ");
		} else if (arrayIndex % 5 == 0) {
			debug("BUZZ");
		} else {
			debug(arrayIndex);
		}
	});
}



fizzbuzz(15);


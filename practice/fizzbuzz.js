
"use strict";

function fizzbuzz(input) {

	var array = []

	while (input > 0){
		array.push(input);
		input -= 1;
	}

	array.forEach(function(array_index) {
		if ((array_index % 3 == 0) && (array_index % 5 == 0)) {
			debug("FIZZBUZZ");
		} else if (array_index % 3 == 0) {
			debug("FIZZ");
		} else if (array_index % 5 == 0) {
			debug("BUZZ");
		} else {
			debug(array_index);
		}
	});
}



fizzbuzz(15);



"use strict";

function compareArrays(array_1, array_2) {
	var array_2_worker;

	if (array_1.length != array_2.length) {
		debug(false);
	  return false;
	}
		


	array_1.forEach(function(x){
		
		array_2_worker = array_2.shift()
		if (x != array_2_worker) {
			debug(false);
			return false;
		} else {
			debug(true);
		}
	});
}

compareArrays([5, 5, 6, 5], [5, 5, 5, 5]);


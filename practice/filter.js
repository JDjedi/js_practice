
"use strict";

function filter_list(list) {
	var i;
	for (i=0; i < list.length; i++){
		if ((typeof list[i]) === 'string'){
		  list.splice(i, 1);
		  i = i - 1;
		}
	}
	return list;
}


//filter_list([1, 2, 'a', 'b'])
//filter_list([1,'a','b',0,15])
//filter_list([1,2,'aasf','1','123',123])
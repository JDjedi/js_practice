'use strict';

function largestEl(array) {
  var sorted_array = array.sort(function(a, b){return a - b});
  
  var greatest_value = sorted_array.pop();
  console.log(greatest_value);
}


largestEl([2, 3, 4, 10, 5, 77, 8])
largestEl([3, 4, 89, 12, 0])
largestEl([45, 100, 1000, 12])

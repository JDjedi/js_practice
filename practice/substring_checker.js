
"use strict";

function solution(word, sub_word) {
  
  var sub_word_test_length = sub_word.length;
  var word_test = word.slice(sub_word_test_length * -1);

  if (word_test === sub_word){
    console.log('True');
  } else {
    console.log('False');
  }
}

solution('abc', 'bc');
solution('kjnefkjr', 'kjw');
solution('doggo', 'ggo');


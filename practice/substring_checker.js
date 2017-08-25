
"use strict";

function solution(word, subWord) {
  
  var subWordTestLength = subWord.length;
  var word_test = word.slice(subWordTestLength * -1);

  if (word_test === subWord){
    debug('True');
  } else {
    debug('False');
  }
}

solution('abc', 'bc');
solution('kjnefkjr', 'kjw');
solution('doggo', 'ggo');


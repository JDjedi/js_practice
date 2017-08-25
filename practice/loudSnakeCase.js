'use strict';

function loudSnakeCase(sentence) {
  var upperCased = sentence.toUpperCase();
  
  var puntuationized = upperCased.replace(/[.,\/#!$%\^&\*;:{}=\-`~()]/g,"")
  
  var spaced = puntuationized.replace(/ /g, "_");
  
  debug(spaced);
  
}

loudSnakeCase("Hello World, My name is Jonathan Diaz!");
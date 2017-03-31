"use strict";

var data = {
  one: "a",
  two: "z",
  three: "i",
  four: "r",
  five: "s",
  six: "e",
  seven: "l",
  eight: "x",
  nine: "k"
};

var vowelArray = ["a", "e", "i", "o", "u"];

function findTheVowel(array) {
  for (var tally in array){
    for (var key in this) {
      if (this[key] == array[tally] ) {
        console.log("The letter " + this[key] + " is a vowel");
      }
    }
  }
}

var work = findTheVowel.bind (data);
var work2 = work(vowelArray);
console.log(work2);
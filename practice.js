'use strict';

function PeopleConstructor() {
  this.sex = undefined;
  this.politicalAffiliation = undefined; 
}

var populateArray = function(PeopleConstructor){
  var personArray = [];
  
  while (personArray.length < 100){
    var person = new PeopleConstructor();
    person.sex = "M";
    person.politicalAffiliation = Math.random();
    personArray.push(person);
  }
  
  sortPopulation(personArray);
}

var sortPopulation = function(personArray){
  var right = [];
  var left = [];
  
  personArray.forEach(function(element){
    if (element.politicalAffiliation >= .5) {
      right.push(element);
    } else {
      left.push(element);
    }
  });
  
  console.log(right);
  console.log("");
  console.log(left);
}

populateArray(PeopleConstructor);


'use strict';

function PeopleConstructor() {
  this.sex = undefined;
  this.politicalAffiliation = undefined; 
}

var populateArray = function(PeopleConstructor){
  var personArray = [];
  
  while (personArray.length < 10){
    var person = new PeopleConstructor();
    person.sex = "M";
    person.politicalAffiliation = Math.random();
    personArray.push(person);
  }
  
  //sortPopulationByIdeology(personArray);
  politicalEventOne(personArray);
  //sortPopulation(personArray);
}

var populationOverloadChecker = function(person){
  if (person.politicalAffiliation > 1) {
    person.politicalAffiliation = 1;
    return person;
  } else if (person.politicalAffiliation < 0) {
    person.politicalAffiliation = 0;
    return person;
  } else {
    return person;
  }
}

var sortPopulationByIdeology = function(personArray){
  var right = [];
  var left = [];
  
  personArray.forEach(function(element){
    if (element.politicalAffiliation >= .5) {
      right.push(element);
    } else {
      left.push(element);
    }
  });
  
  console.log("The Right");
  console.log(right);
  console.log("The Left");
  console.log(left);
  console.log("");
}

var politicalEventOne = function(personArray){
  personArray.forEach(function(element){
    if (element.politicalAffiliation >= .5) {
      element.politicalAffiliation = element.politicalAffiliation + .1;
      populationOverloadChecker(element);
    } else {
      element.politicalAffiliation = element.politicalAffiliation - .1;
      populationOverloadChecker(element);
    }
  });

  sortPopulation(personArray);
}

var sortPopulation = function(personArray){
  personArray.sort(function(a, b) {
    return parseFloat(b.politicalAffiliation) - parseFloat(a.politicalAffiliation);
  });
  console.log(personArray);
}


populateArray(PeopleConstructor);










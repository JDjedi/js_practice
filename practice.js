'use strict';

function PeopleConstructor() {
  this.sex = undefined;
  this.politicalAffiliation = undefined;
  this.polarization = false;
}

var populateArray = function(PeopleConstructor){
  var personArray = [];
  
  while (personArray.length < 10){
    var person = new PeopleConstructor();
    person.sex = "M";
    person.politicalAffiliation = Math.random();
    personArray.push(person);
  }
  displayPopulation(personArray);
  politicalEvent(personArray);
}

var populationPolarizationChecker = function(person){
  if (person.politicalAffiliation > 1) {
    person.politicalAffiliation = 1;
    person.polarization = true;
    return person;
  } else if (person.politicalAffiliation < 0) {
    person.politicalAffiliation = 0;
    person.polarization = true;
    return person;
  } else {
    return person;
  }
}

var politicalEvent = function(personArray){
  var digit = prompt("Please enter a digit: ");

  personArray.forEach(function(element){
    if (element.politicalAffiliation >= .5) {
      element.politicalAffiliation = element.politicalAffiliation + parseFloat(digit);
      populationPolarizationChecker(element);
    } else {
      element.politicalAffiliation = element.politicalAffiliation - parseFloat(digit);
      populationPolarizationChecker(element);
    }
  });
  displayPopulation(personArray);
}

//displays sorted population
var displayPopulation = function(personArray){
  personArray.sort(function(a, b) {
    return parseFloat(b.politicalAffiliation) - parseFloat(a.politicalAffiliation);
  });
  console.log(personArray);
  console.log("");
}

var displayPopulationByIdeology = function(personArray){
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

populateArray(PeopleConstructor);














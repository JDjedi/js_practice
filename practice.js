'use strict';

function PeopleConstructor() {
  this.sex = undefined;
  this.politicalAffiliation = undefined;
  this.polarization = false;
}

var objPolSim = {
  populateArray: function(PeopleConstructor){
    var personArray = [];
    
    while (personArray.length < 10){
      var person = new PeopleConstructor();
      person.sex = "M";
      person.politicalAffiliation = Math.random();
      personArray.push(person);
    }
    this.displayPopulation(personArray);
    this.politicalEvent(personArray);
  },

  populationPolarizationChecker: function(person){
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
  },

  politicalEvent: function(personArray){
    var digit = prompt("Please enter a digit: ");

    personArray.forEach(function(element){
      if (element.politicalAffiliation >= .5) {
        element.politicalAffiliation = element.politicalAffiliation + parseFloat(digit);
        objPolSim.populationPolarizationChecker(element);
      } else {
        element.politicalAffiliation = element.politicalAffiliation - parseFloat(digit);
        objPolSim.populationPolarizationChecker(element);
      }
    });
    this.displayPopulation(personArray);
  },

  //displays sorted population
  displayPopulation: function(personArray){
    personArray.sort(function(a, b) {
      return parseFloat(b.politicalAffiliation) - parseFloat(a.politicalAffiliation);
    });
    console.log(personArray);
    console.log("");
  }
}

objPolSim.populateArray(PeopleConstructor);













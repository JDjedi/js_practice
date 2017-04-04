function PeopleConstructor() {
	this.sex = undefined;
	this.politicalAffiliation = undefined; 
}

var populateArray = function(PeopleConstructor){
  personArray = [];
  
  while (personArray.length < 100){
    var person = new PeopleConstructor();
    person.sex = "M";
    person.politicalAffiliation = Math.random();
    personArray.push(person);
  }
  console.log(personArray);
}

populateArray(PeopleConstructor);
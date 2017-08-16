
"use strict";

var person1 = {
	personName: "JD",
	age: 27,
	dob: "08/14/1989",
	interests: ["Politics", "History", "Economics", "Philosophy", "Programming", "Adventure"],
	occupation: "Costco Supervisor",
	eductation: "Bachelors of Arts in Government and Philosophy"
};
 
function personParser(person){
	var key;
	for (key in person){
		console.log(person[key]);
	}
}

personParser(person1);


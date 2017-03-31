var a = "42";
var b = 42;

a == b;         // true (equality, coerces)
a === b;        // false (strict equality)


//closure explanation
//creates 
function Person(name){
	var _name = name;	// _name = free variable, private variable

	this.getName = function(){ // this when called allows us to access variable _name even afterthe function has returned
		return _name;						 // <= referenced here
	};
}

var citizen = new Person("JD") //object is instantiated here
citizen // => Person {getName: function}
citizen.getName() // => "JD" // access instatitated objects private function 


//Prototype example below
//advantage: no many how many obj you create(e1, e2), the function is only loaded once
function Employee(name) {
	this.name = name;
}

Employee.prototype.getName = function(){ //This function is loaded only once
	return this.name;
}

var e1 = new Employee("Mark"); // => prints Mark
var e2 = new Employee("Sara"); // => prints Sara



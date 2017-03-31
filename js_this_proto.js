//Js "this" and Obj Prototypes

// "this" binding is a constant source of confusion for the JavaScript developer who
// does not take the time to learn how the mechanism actually works. Guesses,
// trial-and-error, and blind copy-n-paste from Stack Overflow answers is not an
// effective or proper way to leverage this important "this" mechanism.

// To learn "this", you first have to learn what "this" is not, despite any assumptions or
// misconceptions that may lead you down those paths. "this" is neither a reference to
// the function itself, nor is it a reference to the function's lexical scope.

// "this" is actually a binding that is made when a function is invoked,
// and what it references is determined entirely by the call-site where
// the function is called.



//Example 2 from "Understand Javascript"
var firstName = "Peter",
	lastName = "Ally";
​
function showFullName () {
// "this" inside this function will have the value of the window object​
// because the showFullName () function is defined in the global scope, just like the firstName and lastName​
console.log (this.firstName + " " + this.lastName);
}
​
var person = {
	firstName   :"Penelope",
	lastName    :"Barrymore",
	showFullName:function () {
	// "this" on the line below refers to the person object, because the showFullName function will be invoked by person object.​
	console.log (this.firstName + " " + this.lastName);
	}
}
​
showFullName(); // Peter Ally​
// window is the object that all global variables and functions are defined on, hence:​
window.showFullName (); // Peter Ally​
// "this" inside the showFullName () method that is defined inside the person object still refers to the person object, hence:​
person.showFullName (); // Penelope Barrymore



//4 ways in which "this" works
//
//Implicit Binding
//Because obj is the "this" for the foo() call, "this.a" is synonymous with "obj.a"
//!Only the top/last level of an object property reference chain matters to the call-site!
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

obj.foo(); // 2 // MAGIC

//explicit binding
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2
};

foo.call( obj ); // 2

//hard binding
function foo(something) {
    console.log( this.a, something );
    return this.a + something;
}

var obj = {
    a: 2
};

var bar = foo.bind( obj );

var b = bar( 3 ); // 2 3
console.log( b ); // 5 // MAGIC

//new Binding
function foo(a) {
    this.a = a;
}

var bar = new foo( 2 );
console.log( bar.a ); // 2



//specific instances in using this

//using this to pass it as a variable
$("button").click (user.clickHandler); // wrong!
$("button").click (user.clickHandler.bind (user)); // right!

// using this inside a closure
var user = {
	tournament:"The Masters",
  data      :[
    {name:"T. Woods", age:37},
    {name:"P. Mickelson", age:43}
  ],
​
  clickHandler:function () {
		var theUserObj = this; //defined this is now inside a variable

    this.data.forEach (function (person) {
       console.log (person.name + " is playing at " + theUserObj.tournament); // originally this was in the place of theUserObj but because this was called and used inside a closure it was undefined, so we turn it into a variable instead
    })
  }
}
user.clickHandler(); // What is "this" referring to? [object Window]

// This when assigned to a variable
var data = [
	{name:"Samantha", age:12},
	{name:"Alexis", age:14}
	];
​
var user = {
	data    :[
	{name:"T. Woods", age:37},
	{name:"P. Mickelson", age:43}
	],
	showData:function (event) {
		var randomNum = ((Math.random () * 2 | 0) + 1) - 1; 
		console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
		}
}
//var showUserData = user.showData; //wrong, since called below 'data' defaults to the first data, the global variable
var showUserData = user.showData.bind (user);// right!
showUserData (); 



// Now, we can summarize the rules for determining this from a function call's call-site,
//in their order of precedence. Ask these questions in this order, and stop when the first rule applies.

// Is the function called with new (new binding)? If so, this is the newly constructed object.
// var bar = new foo()

// Is the function called with call or apply (explicit binding), even hidden inside a bind hard binding?
// If so, this is the explicitly specified object.
// var bar = foo.call( obj2 )

// Is the function called with a context (implicit binding), otherwise known as an owning or containing object?
// If so, this is that context object.
// var bar = obj1.foo()

// Otherwise, default the this (default binding). If in strict mode, pick undefined, otherwise pick the global object.
// var bar = foo()

// That's it. That's all it takes to understand the rules of this binding for normal function calls. Well... almost.




















































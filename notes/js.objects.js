//Copying an object in Js
var myObject = {
    a: 2,
    b: anotherObject,   // reference, not a copy!
    c: anotherArray,    // another reference!
    d: anotherFunction
};

var newObj = Object.assign( {}, myObject ); //First argument is the new object, second the obj to copy

newObj.a;                       // 2
newObj.b === anotherObject;     // true
newObj.c === anotherArray;      // true
newObj.d === anotherFunction;   // true

// Property discriptor
var myObject = {
    a: 2
};

Object.defineProperty( myObject, "a", {
    value: 2,
    writable: true, // determines whether or not you can amend the obj properties
    configurable: true, // determines whether or not you can do this, like literally change the config of the object
    enumerable: true // self explanatory
} );

myObject.a; // 2

//if you want to iterate over the values in an object, use "for..of"
var myArray = [ 1, 2, 3 ];

for (var v of myArray) {
    console.log( v );
}
// 1
// 2
// 3

//see if a property exists within an object
var myObject = {
    a: 2
};

("a" in myObject);              // true Note: this checks the object's prototype chain as well
("b" in myObject);              // false

myObject.hasOwnProperty( "a" ); // true Note: this does not check the objects't prototype chain, just the object itself
myObject.hasOwnProperty( "b" ); // false










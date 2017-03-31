//IIFE syntax
// (function(){...}())
var a = 2;

(function IIFE(){ 		// this is an immediately invoked function expression
    var a = 3;				// always name your functions, even if all they are doing is hiding private details
    console.log( a ); // 3
})();

console.log( a ); // 2



//Block functionality, Js style!
var foo = true;
var bar = "Outside nah mean?" //Since those others are temp within the block...

if (foo) {
  { //Need these to explicitly envoke the block
    let bar = "Hello World" //Magic word right here, "let" //Must be declared initially!
    console.log( bar );  // => Hello World
  } //Need these to explicitly envoke the block
}
else {
  { //Need these to explicitly envoke the block
    let bar = "Welp that is all folks" //Magic word right here, "let"
    console.log( bar ); // =>Welp that is all folks
  } //Need these to explicitly envoke the block
}

console.log(bar) // => Outside nah mean?

// Hoisting
// 
// We can be tempted to look at var a = 2; as one statement,
// but the JavaScript Engine does not see it that way. 
// It sees var a and a = 2 as two separate statements,
// the first one a compiler-phase task, and the second one an execution-phase task.
// 
// What this leads to is that all declarations in a scope, regardless of where they appear,
// are processed first before the code itself is executed. You can visualize this as declarations 
// (variables and functions) being "moved" to the top of their respective scopes,
// which we call "hoisting".
// 

foo();
function foo() {
    console.log( a ); // undefined
    var a = 2;
}

//Above is compiled like below...
function foo() {
    var a;

    console.log( a ); // undefined
    a = 2;
}
foo();

//functions are done first, and at that the most subsequent function is always done first



//Closure
//Whatever facility we use to transport an inner function outside of its lexical scope,
//it will maintain a scope reference to where it was originally declared,
//and wherever we execute it, that closure will be exercised.
//
//Closure seems to the un-enlightened like a mystical world set apart inside of JavaScript
//which only the few bravest souls can reach. But it's actually just a standard and almost
//obvious fact of how we write code in a lexically scoped environment, where functions are
//values and can be passed around at will. Closure is when a function can remember and
//access its lexical scope even when it's invoked outside its lexical scope.
//
//Example below
//By retaining an inner reference to the public API object inside your module instance,
//you can modify that module instance from the inside,
//including adding and removing methods, properties, and changing their values.

var foo = (function CoolModule(id) {
    function change() {
        // modifying the public API
        publicAPI.identify = identify2;
    }

    function identify1() {
        console.log( id );
    }

    function identify2() {
        console.log( id.toUpperCase() );
    }

    var publicAPI = {
        change: change,
        identify: identify1
    };

    return publicAPI;
})( "foo module" );

foo.identify1(); // => foo module
foo.change();
foo.identify2(); // => FOO MODULE






























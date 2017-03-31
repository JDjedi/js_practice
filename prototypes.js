//
//
//We don't need classes to create meaningful relationships between two objects. 
//The only thing we should really care about is objects linked together 
//for delegation, and Object.create(..) gives us that linkage without all the class cruft.
//
//This is called "OLOO" (objects-linked-to-other-objects)
//
//Behavior Delegation means: let some object (XYZ) provide a delegation (to Task) for property
//or method references if not found on the object (XYZ). This is an extremely powerful design pattern,
//very distinct from the idea of parent and child classes, inheritance, polymorphism,
//etc. Rather than organizing the objects in your mind vertically, with Parents flowing down
//to Children, think of objects side-by-side, as peers, with any direction of delegation links
//between the objects as necessary.
//



//How to create a prototype chain
function Foo(name) {
    this.name = name;
}

Foo.prototype.myName = function() {
    return this.name;
};

function Bar(name,label) {
    Foo.call( this, name );
    this.label = label;
}

// here, we make a new `Bar.prototype`
// linked to `Foo.prototype`
Bar.prototype = Object.create( Foo.prototype ); //this is the sweet spot

// Beware! Now `Bar.prototype.constructor` is gone,
// and might need to be manually "fixed" if you're
// in the habit of relying on such properties!

Bar.prototype.myLabel = function() {
    return this.label;
};

var a = new Bar( "a", "obj a" );

a.myName(); // "a"
a.myLabel(); // "obj a"



// Visualization of how the above works... with a bit extra
//----------------------PROTOTYPE-CHAIN-------------------------PROTOTYPE-CHAIN---------->
//
//Object.prototype ======> Pow(ID) 
//                           ||
//                           ||==============>Foo(Pow(ID), name)
//                                                  ||
//                                                  ||=======> Bar(Pow(ID), Foo(name), label) 
//
//----------------------PROTOTYPE-CHAIN--------------------PROTOTYPE-CHAIN--------------->

//to check if an object is delegating to any other object via prototype
// Simply: does `b` appear anywhere in
// `c`s [[Prototype]] chain?
b.isPrototypeOf( c );

//No magic, like the above example what if you want to call Bar.name?
//the call will still work and name will run but it appears magical
//below is how to write it so it appears not so magical and more explicit
var anotherObject = {
    cool: function() {
        console.log( "cool!" );
    }
};

var myObject = Object.create( anotherObject );

myObject.doCool = function() {
    this.cool(); // internal delegation!
};

myObject.doCool(); // "cool!"

//another example down below
var Task = {
    setID: function(ID) { this.id = ID; },
    outputID: function() { console.log( this.id ); }
};

// make `XYZ` delegate to `Task`
var XYZ = Object.create( Task );

XYZ.prepareTask = function(ID,Label) {
    this.setID( ID );
    this.label = Label;
};

XYZ.outputTaskDetails = function() {
    this.outputID();
    console.log( this.label );
};



//
//Real life example down below
//
var Widget = {
    init: function(width,height){
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    },
    insert: function($where){
        if (this.$elem) {
            this.$elem.css( {
                width: this.width + "px",
                height: this.height + "px"
            } ).appendTo( $where );
        }
    }
};

var Button = Object.create( Widget );

Button.setup = function(width,height,label){
    // delegated call
    this.init( width, height );
    this.label = label || "Default";

    this.$elem = $( "<button>" ).text( this.label );
};
Button.build = function($where) {
    // delegated call
    this.insert( $where );
    this.$elem.click( this.onClick.bind( this ) );
};
Button.onClick = function(evt) {
    console.log( "Button '" + this.label + "' clicked!" );
};

$( document ).ready( function(){
    var $body = $( document.body );

    var btn1 = Object.create( Button );
    btn1.setup( 125, 30, "Hello" );

    var btn2 = Object.create( Button );
    btn2.setup( 150, 40, "World" );

    btn1.build( $body );
    btn2.build( $body );
} );
















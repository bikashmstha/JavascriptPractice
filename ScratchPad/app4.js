/*
In javascript functions are first class objects because it can do a lot more than what objects can do.

A function is an instance of an Object type.
Function instanceof Object  //returns true

Like an object a function can have properties and can have a link back to it’s constructor function.
*/
var o = {}; // empty object 'o'
    o.a = 1 ; 
    o.b = 2 ; 

    console.log(o.a); // 1
    console.log(o.b); // 2 


    function foo(){};
    foo.a = 3 ; 
    foo.b = 4 ; 

    console.log(foo.a);  // logs 3
    console.log(foo.b);  // logs 4 

    //Functions can be stored in a variable as a value.
    var foo = function(){}; 
    console.log(foo); // function(){}

   //Functions can be passed as arguments to other functions
   function callback (foo){
    foo();
    }

callback(function(){console.log('Successfuly invoked as an argument inside function callback')})
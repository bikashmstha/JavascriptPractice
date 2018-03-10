/*https://en.wikipedia.org/wiki/Scope_(computer_science)#JavaScript

JavaScript
JavaScript has simple scoping rules,[15] but variable initialization and name resolution rules can cause problems, 
and the widespread use of closures for callbacks means the lexical environment of a function when defined (which 
is used for name resolution) can be very different from the lexical environment when it is called (which is 
irrelevant for name resolution). JavaScript objects have name resolution for properties, but this is a separate 
topic.

JavaScript has lexical scoping[16] nested at the function level, with the global scope being the outermost scope. 
This scoping is used for both variables and for functions (meaning function declarations, as opposed to variables 
of function type).[17] Block scoping with the let and const keywords is standard since ECMAScript 6. Block scoping 
can be produced by wrapping the entire block in a function and then executing it; this is known as the 
immediately-invoked function expression (IIFE) pattern.

While JavaScript scoping is simple – lexical, function-level – the associated initialization and name resolution 
rules are a cause of confusion. Firstly, assignment to a name not in scope defaults to creating a new global 
variable, not a local one. Secondly, to create a new local variable one must use the var keyword; the variable 
is then created at the top of the function, with value undefined and the variable is assigned its value when 
the assignment expression is reached:

A variable with an Initialiser is assigned the value of its AssignmentExpression when the VariableStatement is 
executed, not when the variable is created.[18]
This is known as variable hoisting[19] – the declaration, but not the initialization, is hoisted to the top of the 
function. Thirdly, accessing variables before initialization yields undefined, rather than a syntax error. 
Fourthly, for function declarations, the declaration and the initialization are both hoisted to the top of the 
function, unlike for variable initialization. For example, the following code produces a dialog with output 
undefined, as the local variable declaration is hoisted, shadowing the global variable, but the initialization 
is not, so the variable is undefined when used:
*/

function newCounter() {
    // return a counter that is incremented on call (starting at 0)
    // and which returns its new value
    var a = 0;
    var b = function() { a++; return a; };
    return b;
}

c = newCounter();
alert(c() + ' ' + c());  // outputs "1 2"
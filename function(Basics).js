/*
Topic covered:JS FUNCTION
-Basics
-Types of function
*/

//=======================
// Function Basics
//=======================
/*
- code reusability
-Break large code into small pieces of code
-readability
- Easy to debugging
*/

//=======================
// Function Declaration
//=======================
function first(){ 
    console.log("Hii.. this is mega");
}
first();
//=======================
// Function Expression
//=======================
function sec(){
    return "I am a frontend developer";
}
let second=sec();
console.log(second);
//=======================
// Parameters & Arguments
//=======================
function third(a,b){
    console.log("Addition of these two number  "+(a+b));
}
third(23,45);
//=======================
// Default Parameters
//=======================
function third1(a,b=10){
    console.log("Addition of these two number  "+(a+b));
}
third1(23);
//=======================
// Return and Non-return functions
//=====================
function add(a,b){
    return a*b;
}
add(2,6);
let five =function add(a,b){
    console.log( a*b);
}   
console.log(five(2,6));

//=======================
// Named Functions
//=======================
function move(a,b){
    return a/b;
}
console.log(move(12,3));
//=======================
// Anonymous Functions
//=======================
const my=function (c,d){
    return c%d;
}
console.log(my(23,45));
//=======================
// Arrow Functions
//=======================
let add=(a,b)=>a*b; // No {}, return keyword
console.log(add(2,5));
//single parameter
let sub = x => x*x ; // No (),{},return
console.log(sub(4));
//=======================
// IIFE (Self-invoking)
//cannot access with function name ... so function name is useless
//=======================
function normal(){
    console.log("Executed the whenever i call");
}
(function(){
    console.log("seld iife");
})();
// IIFE  in anonymous f()
(function (){
    console.log("This is Immediately invoked function")
})();
//IIFE in arrow f()
let con=((a,b)=>{
    return a*b;
    
}) 
console.log(con(2,4));
//=======================
// Generator Functions
//=======================
function* value(arr){
for(i=0;i<=arr.length-1;i++){
    yield arr[i];    
}
}
let value1 =value([12,23,557,87,34]);
console.log(value1.next());
//=======================
// Closures
//=======================
//access outer function  var in inner function 

function outer() {
  let x = 10;      // a variable inside outer()

  function inner() {
    console.log(x); // inner can still use x
  }

  return inner;     // return inner function
}

const fn = outer();  // outer() is done
fn();                // prints 10

// Most common way to use
function outer(){
    let first = "I am outer variable" ;
   return function inner(){
    console.log(first);
   }
}
const sec = outer();
sec();
//=======================
// Higher-Order Functions
//=======================
function add(callback,a,b){
   console.log( callback(33,65));
return a*b;
}
function sub(a,b){
    return a-b;
}
console.log(add(sub,7,7));
//=======================
// Callback Functions
//=======================
function add(callBack, a, b) {
    console.log(a + b);
    callBack(100,200);
}
function sub(num1,num2){
    console.log(num1-num2);
}
add(sub,20,30);
//=======================
// Currying-multiple parameter turns into function return and also seprate arguments
//=======================
//example1
function greet(greeting){
    return function(name){
        return greeting + " " + name;
    };
}
console.log(greet("Hello")("Mega"));
//example2
function add(a){
    return function(b){
        return function(c){
            console.log(a*b*c);
        }
    }
}
 add(30)(30)(30);               //way1 
 let curry1=add(2);             //way2
let curry2 = curry1(6);
curry2(7); 

 

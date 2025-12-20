/*
Topic covers:Js Data types
-Primitive type
- Refernce type
- undefined vs null
- typeof operator
- type coercion
- implict vs explicit 
- ways of finding  variable type
*/
//================================
// 1. Primitive Data Types
//================================

// String
let name = "JavaScript";

// Number
let age = 25;

// Boolean
let isOnline = true;

// Undefined
let x;

// Null
let y = null;

// Symbol
let id = Symbol("id");

// BigInt
let bigNum = 12345678901234567890n;

//================================
// 2. Reference Data Types
//================================

// Object
let user = {
  name: "John",
  age: 30
};

// Array
let numbers = [1, 2, 3, 4];

// Function
function greet() {
  return "Hello";
}

//================================
// 3. Undefined vs Null
//================================

let a;
let b = null;

console.log(a); // undefined
console.log(b); // null

//================================
// 4. typeof Operator
//================================

console.log(typeof "Hello");   // string
console.log(typeof 10);        // number
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object 
//Why typeof null return ‘object’? Because of historial js bug that was never fixed.
console.log(typeof {});        // object
console.log(typeof []);        // object
console.log(typeof function(){}); // function

//================================
// 5. Type Coercion
//================================

// Implicit Type Coercion
console.log(5 + "5");   // "55"
console.log("5" - 2);   // 3
console.log(true + 1);  // 2

//================================
// 6. Explicit Type Coercion
//================================

// String Conversion
console.log(String(100));

// Number Conversion
console.log(Number("50"));
// Boolean Conversion
console.log(Boolean(1));
console.log(Boolean(0));

//================================
// ways of finding variable type
//================================
/*
method 1: typeof
- best for primitive
- weak for objects
method 2 - instanceof
- check whether an object belongs to a specific constructor
- Fails in cross-window / iframe issue
method 3 - built-in function
-Array	Array.isArray()
-NaN	Number.isNaN()
-Integer	Number.isInteger()
-Finite	Number.isFinite()
method 4 -internal method
- works for all types
- checks the internal [[Class]] slot
- making it the most reliable way to detect data types in JavaScript.
*/

















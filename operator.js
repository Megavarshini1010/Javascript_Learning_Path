/*
Topic covered:JS OPERATOR
-Arithmetic Operators
-Assignment Operators
-Comparison Operators
-Logical Operators
-Bitwise Operators
-Unary Operators
-Ternary Operator
-Optional Chaining
-Nullish Coalescing
*/

//================================
//Arithmetic operator
//================================
let a = 8;
let b = 6;
console.log(a+b); //14
console.log(a-b); //2
console.log(a*b);  //48
console.log(a/b); //1.33333333333
console.log(a%b); //2
console.log(a**b); //262144
let c=8;
let d= 9;
c++; //post increment 9++ 
++c; //pre increment ....9 = 9++=10 so finally 10
console.log(c) //first 9 then pre increment it results 10

//================================
//Assignment operator
//================================
let e=45;
let f=65;
e+=f;
console.log(e) //110
e-=f;
console.log(e) //45
e*=f;
console.log(e) //2925
e/=f;
console.log(e) //45
e%=f;
console.log(e) //45

//================================
//Comparison operator
//================================

/*
== loose equality checks only value
=== strict equality check value and it also data type 
*/
console.log(5=="5"); //true
console.log(5==="5");//false
console.log(5>6);//false
console.log(8<54);//true
console.log(5!=7);//true
console.log(6!==87);//true
console.log(3<=5);//true
console.log(33>=5);//true

//================================
//Logical operator
//================================
let age=56;
let gender="female";
console.log(age>18&&gender=="male"); //false
console.log(age>18||gender=="male"); //true
console.log(!gender=="male"); //true

//================================
// Bitwise operator -Based on binary values
//================================
console.log(5&1); //1
console.log(5^4); //1
console.log(5>>1); //2
console.log(4<<1); //8
console.log(~5); //-6

//================================
// Conditional operator
//================================
let age_of_person=13;
let short=age_of_person>18?"allowed":"not allowed";
console.log(short);

//================================
// Type operator
//================================

let a1=10;
console.log(typeof(a1));
//instanceof
//- check object type

//================================
// nullish  operator
//================================
//?? and || 
//Returns the right-hand value only if the left-hand value is null or undefined
let z=45;
let y;
let name = z??y;
console.log(name);




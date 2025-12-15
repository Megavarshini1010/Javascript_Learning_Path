/*

Topic = js variables
This file covers:
- var,let and const
-naming rules
-scope
-de-clare & de-assign
*/
//*********let,var and const ********* */
//var keyword declaration
var age ; //declare
 age = 20; // initilize //assign
 var age =40; //re -declare
age = 56; //re-initialize  // re-assign
console.log(age);
let na;
na="mega";
// let na="harshu"  --->   No re-declare
 na="harshu";
console.log(na);

//*******naming rules**********
// not start with number 
//cannot use keywords
//can start with symbols

//**********scope*********
//let and const = to respect block scope
//var = function scope

function outer(){
if(true){
    var varval="Hii this is mega";
  
}
  console.log(varval);
}

//let is an block scope
//let and const only access within the scope..like which block contains your variable within the block only access the variable 
function inner(){
if(true){

    let value1="i am block scope";
    
}
console.log(value1);

}
inner();





/*
Topic covered:JS CONTROL FLOW STATEMENTS
- if
- if-else
- Nested if
- else-if ladder
- switch case
- default
*/

//================================
//if statement - code runs only if condition is true
//================================
let temperature = 25;
if (temperature > 30) {
    console.log("It's a hot day");
}
console.log("Program continues");
//================================
//if-else  statement
//================================
let age=22;
if(age>16){
    console.log("Allowed to access Internet");
}
else{
console.log("Not allowed to access the internet")
}
//================================
//Nested if statement
//================================
let user_name = "megavarshini101";
let password = "Mega12@098";
let capcha = "Mp45fAy";
if(user_name=="megavarshini101"){
 if(password=="Mega12@098"){
   if(capcha=="Mp45fAy"){
    console.log("Login successfully");
   }
   else{
    console.log("Capcha invalid");
   }
 }
 else{
    console.log("Password is incorrect");
 }
}
else{
    console.log("Username is incorrect");
}


//================================
//else if statement
//================================
let fan=1;
if(fan=1){
    console.log("Fan is very slow");
}
else if(fan=2){
    console.log("Fan is slow")
}
else if(fan=3){
    console.log("Fan is medium level")
}
else if(fan=4){
    console.log("Fan is high")
}
else if(fan=1){
    console.log("Fan is very speed")
}
else{
    console.log("Fan is off")
}

//================================
//switch case
//================================

let fan_speed = 3 ;
switch(fan_speed){
    case 1: console.log("Fan is very slow");
    break;
    case 2: console.log("Fan is slow");
    break;
    case 3: console.log("Fan is medium");
    break;
    case 4:console.log("Fan is high");
    break;
    case 5: console.log("Fan is very high");
    break;
    default: console.log("Fan is off"); 
}



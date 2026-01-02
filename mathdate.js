/* TOPIC COVERED - MATH&DATE OBJECT
 -Math Object
 -Random Numbers
 -Rounding Methods
 -Date Object
 -Date Formatting
 -Time calculations
*/
//======================
//Math Object
//======================
//math.round - nearest integer
console.log(Math.round(2.15))
//math.ceil - rounds up
console.log(Math.ceil(2.45))
//math.floor -  rounds down
console.log(Math.floor(2.34))
//math trunc - remove the decimal
console.log(Math.trunc(2.555))
//math.abs(x) - absolute
console.log(Math.abs(-40));
//min and max
let arr=[2,45,6,77]
console.log(Math.min(...arr))
console.log(Math.max(...arr))
//power - base , exponent
console.log(Math.pow(2,3))
//Math.sqrt
console.log(Math.sqrt(9))
//cbrt - cube 
console.log(Math.cbrt(27))
//Math.random - between 0 to 1
let random=Math.random()*100 //upto 100
console.log(random.toFixed(2)) //reduce decimal point 
//math.sign
console.log(Math.sign(-10))
console.log(Math.sign(10))
console.log(Math.sign(0))
//Golden formula
//Math.floor(Math.random() * (max - min + 1)) + min;
//==========================
//DATE OBJECT 
//==========================
let now = new Date(); 
console.log(now);
//create specific date
let n = new Date(2025,0,15);
console.log(n);
//GET METHODS
let date= new Date() //constructor //object creation
console.log(date);
console.log(date.getFullYear()); //current year
console.log(date.getDate()); //date
console.log(date.getMonth()+1); //depends on index like 1 to 11
console.log(date.getDay()); // sun(0)  to saturday(5)
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
//  SET OBJECT  
date.setMonth(11,23);
console.log(date);
date.setDate(12)
console.log(date);
//FORMATTING DATES
console.log(n.toDateString()); //Wed Jan 15 2025
console.log(n.toLocaleDateString()); //15/1/2025
console.log(n.toISOString()); //2025-01-14T18:30:00.000Z




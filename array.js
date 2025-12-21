/*
Topic covered - JS ARRAY AND METHODS
-Basics of array
-
*/
//=======================
// Basics - Hold any type of values
//=======================
let student = ["mega",1235,"department","mark"];
console.log(student);
//=======================
//Dense and Sparse Array
//=======================
let dense = [1, 2, 3];
let sparse = [];
sparse[2] = 'hello'; 

console.log(dense); // [1, 2, 3]
console.log(sparse); // [ <2 empty items>, 'hello' ]
//=======================
// Array Length
//=======================
let len = [1, 2, 3];
console.log(len.length); //4
//=======================
// Iteration Techniques - for, forEach, for...of
//=======================
let arr1 =["mega",1235,"department","mark"];
for(let i=0;i<=arr1.length-1;i++)
    console.log(arr1[i])    //for
for(let arr2 of arr1){
    console.log(arr2);      //for...of
}
arr1.forEach(arr3 => console.log(arr3));     //forEach loop
/*=======================
 Array Operations
 - Access 
 - update
 - Add [push or unshift]
 - Remove[pop or shift]
=========================
*/
let arr = [1,2,34,56,7,99];
let num= ["one","two","three","four","five"];
arr.push(3);
arr.pop();
arr.unshift(111);
arr.shift();
/*=======================
Array Methods
-slice(no changes in original array)
-splice(changes in original array)
-concat
-flat
-fill
-sort
-reverse
- includes
- join
- toString
- indexof
- lastindexof
=======================
*/
let arr2 = [1,2,34,56,7,99];
let part = arr2.slice(1,5); //(index start, end index) like end index -1 
console.log(part)
let part1 =arr2.splice(1,2,45,44); //(start index,deletecount,add items..)
console.log(part1)
console.log(arr2)
let a = [1, 2];
let b = [3, 4];
console.log(a.concat(b));   
//flat method
let n =[1,2,3,[4,5,6]];
let a1= n.flat() 
console.log(a1) //single array 
//fill method
let ATS = [23,45,677,8,9,9];
let war = ATS.fill(101,0,2); //(fiil element, index start, element count)
console.log(war)
//sort method -  sorted by ASCII value
let arr7=[666,33,7,41,43];
arr.sort();
console.log(arr); 
//reverse method
let arr88=[666,33,7,41,43];
arr.reverse();
console.log(arr); 
//includes
//Returns true or false
console.log(arr88.includes(5666));
//join    //seprator
let srt =[12,4,5,67];
let det = srt.join("*");
console.log(det)
//toString
let str =[5,4546,7,8,935]
let frt =str.toString();
console.log(frt)
//index // Left to right 
let str4 =[5,46,7,8,7,8,935]
let grt = str4.indexOf(8,4); //4 is an start at 4 index 
console.log(grt) //right to left 
//LastindexOflet 
let grt1 = str4.lastIndexOf(8,-3); //4 is an start at 4 index 
console.log(grt1); // mius index starts with -1 not 0
/*
ARRAY PROTOTYPE METHODS
- map
- filter
- find
- some
- every
- reduce
- reduceRight
*/
//map
let d=[1,2,3];
let doubled = d.map(num => num * 2); //num is an current value
console.log(doubled);
//filter - works based on condition
let even = d.filter(num => num % 2 === 0); 
console.log(even);
//find- find first element that matches condition
//returns element or undefined
let result = d.find(num => num > 10);
console.log(result);
//some- any one is true it returns true
//every - must all values true
let arr9=[3,5,8,9,7,8];
let value8=arr9.every((e,i,a)=>{
return e%3==0;
});
console.log(value8)
//reduce - combine all the array values into single values
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 10
//reduceRight - combine all the array values into single values from right to left
let letters = ["a","b","c","d"];
let result1 = letters.reduceRight((acc, cur) => acc + cur, "");
console.log(result1); // "dcba"
//=======================
//Rest & spread operator
//=======================
//rest operator - Collect
const numbers2 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers2;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]
//spread operator - Expand
let frontend = ["html","css","javascript"]
let backend = ["java","mysql","springboot"]
let fullstack =[...frontend,...backend]  //we can also add new values
console.log(fullstack)                  //array for spread operator
//rest destrucing
let arr11=[13,1,3,5,6,7,7,8,9,0,7,7]
let [a2,a3,a4,...a5]= arr11; //must be in last variable
console.log(a2,a3,a4,a5);
//=======================
//Destructuring & nested 
//=======================
let arr12=[13,1,7,7]
console.log(arr12[0])
//destructuring
let [c, , ,e]= arr12;
console.log(c,e)
//nested destructuring
const numbers1 = [1, [2, 3], [4, 5]];
const [one, [two, three], [four, five]] = numbers1;
console.log(one);   // 1
console.log(two);   // 2
console.log(three); // 3
console.log(four);  // 4
console.log(five);  // 5



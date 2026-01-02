/*TOPIC COVERED - DESTRUCTURING IN JS
1.Array destructuring
2.Object destructuring
3.function return,renaming,default values in destructuring
4.rest parameter in array destructuring
5.rest parameter in object destructuring
*/
//====================
//Array destucturing
//====================
let arr=[13,1,7,7]
//Instead of console.log(arr[0])
let [a, , ,d]= arr;
console.log(b,d)
//=================
//rest destructuring
//must be in last variable
//=================
let arr1=[13,1,3,5,6,7,7,8,9,0,7,7]
let [a1,a2,a3,a4,...a5]= arr1; 
console.log(a1,a2,a3,a4,a5)
//===================
//object 
//===================
let user = {
    name: "mega",
    age:23,
    education:"BE"
}
//Instead of :const name = user.name;
let {age,education} =user;  // renaming the variable name
// let {age:userAge,eduaction:studies} =user; 
console.log(age)
console.log(education) 
//===================
//nested destructing
//===================
const user1 = {
  info: {
    email: "a@b.com",
    city: "Delhi"
  }
};
const { info: { email, city } } = user1;
console.log(email)
//=====================
//function parameter - An object or array inside the function parameter.
//=====================
//object inside parameter
//=====================
function printUser({ name, age }) {
  console.log(name, age);
}
printUser({ name: "Alice", age: 25 });
//====================
//array inside parameter
//====================
function lrds([x, y]) {
  console.log(x, y);
}
lrds([5, 10]);
//=====================
//Default values in object
//=====================
const User = { name: "Ali" };
const { name, age1 = 18 } = User;
console.log(name); // Ali
console.log(age1);  // 18 (default value)
//====================
//return values
//====================
function getValues() {
  return [10, 20];
}
const [a6, b] = getValues();
console.log(a6,b);
//=====================
//rest parameter in object destructuring
//=====================
const user12 = {
  name: "Ali",
  age: 25,
  country: "India"
};
const { name1, ...otherDetails } = user12;
console.log(name1);           // Ali
console.log(otherDetails);   // { age: 25, country: "India" }
//======================
//Rest parameetr in array desturcturing
//======================
const numbers = [1, 2, 3, 4];
const [first, second, ...rest] = numbers;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4]



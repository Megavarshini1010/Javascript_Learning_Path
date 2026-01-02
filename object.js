/* TOPIC COVERED = OBJECT BASICS
*/
//======================
// OBJECT
//======================
let userProfile = {
    name : "meha", //property
    age:22,
    number : 648769465,
    write : function(){ //behaviour
        console.log("I am wroting the story");
    } 
}
//======================
//Nested Object
//======================
let student={
name:"harshni",
marks:{
    maths:90,
    computer:98
}
};
console.log(student)
//=====================
//DYNAMIC PROPERTY
//=====================
let names="trees"
let tree = {
['names'] : "banana tree",
    color : "green",
    water : 2,
   height : 8 
};
console.log(tree.names);
console.log(tree.color);
console.log(tree);
//=====================
//STRING LITERALS
//=====================
let car = {
    "name ": "mehandra thar",
     color : "black",
     "wheels" : 4,
     seating: 5,
     move : function(){
console.log("Thar ia an ultra super power car ");
return "This is my favorite car";
     },
     "seat details" : ['sj','ee', 'dsd']
    }
 console.log(car.color);  //Dot notation
 console.log(car["wheels"] ) //Bracket notation
 console.log(car["seat details"][2]); 
/*======================
Object iteration
- for...in loop
- keys
- values
- entries
- hasOwnProperty(filters own only)
========================
*/
for(let key in userProfile){
    console.log(key,userProfile[key]);
}
console.log(Object.keys(userProfile));
console.log(Object.values(userProfile));
console.log(Object.entries(userProfile));
//=======================
// Object Method
//=======================
let user1 ={
    name:"mercy",
    greet(){
        return `Hello, ${this.name}`
    }
}
console.log(user1.greet());
//======================
//this keyword  function
//======================
const detail ={
     n:"devi",
showname(){
console.log("my dear mom "  +this.n);
}
};
console.log(detail.showname())
/*======================
-[[prototype]] = Actual internal link of inheritance(blueprint)
_ _ proto _ _ = Way to access/view the [[prototype]]
======================
PROTOTYPE CHAIN
1.myDog.__proto__ points to Dog.prototype.
2.Dog.prototype.__proto__ points to Animal.prototype.
3.Animal.prototype.__proto__ points to Object.prototype.
- This is the Prototype Chain.
======================
*/
class Animal {
  eat() { console.log("Eating..."); }
}
class Dog extends Animal {
  bark() { console.log("Woof!"); }
}
const myDog = new Dog();
//========================
//FUNCTION CONSTRUCTOR
//========================
function Person(name,age){ //this refers to the new object being created
    this.name=name;
    this.age=age;
}
const user = new Person("mega",21);
console.log(user.age);
//==========================
//create
//==========================
let newobj = Object.create(Person);
//method1 -  check the prototype 
 console.log(newobj.__proto__)
//method2
console.log(Object.getPrototypeOf(newobj));
console.log(newobj.age);
//===========================
//Add & updating properties
//===========================
newobj.location="tamil nadu";
console.log(newobj);
//check own property
console.log(newobj.hasOwnProperty("age")); // true
//============================
//freeze&seal
//-freeze cannot add,update,delete
//-seal update but cannot add,delete
//isFrozen - check the object is frozen or not
//============================
console.log(Object.seal(newobj));
console.log(Object.freeze(newobj));
console.log(Object.isFrozen(newobj));
//===========================
//Assign property
//===========================
let m1 = {
    id:34,
    name2:'megavarshini'
}
Object.assign(m1,{role:'frontend developer',salary:20000});
console.log(m1);
//============================
//delete property 
//============================
delete m1.id;
console.log(m1);
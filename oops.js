/*TOPICS COVERED: OOPS IN JS
PHASE 1: The Foundation (Basics)
Object
Methods
The this keyword
Constructor Function
The new keyword
PHASE 2: The "Secret Sauce" (Prototypes)
Prototype
__proto__ (The Prototype Link)
Object.getPrototypeOf()
Prototype Chain
PHASE 3: Modern OOP (Classes)
Class
Public Fields & Private Fields
Static Methods & Static Properties
Getters & Setters
PHASE 4: The Four Pillars of OOP
Encapsulation
Abstraction
Inheritance (extends & super)
Polymorphism
PHASE 5: Advanced Control & Internals
Property Descriptors
Object State Control (seal, freeze, preventExtensions)
*/
//===============
//object - key-value pair
//===============
//Methods-function stored as a property inside an object
//===============
//this - Refer current object
//===============
//Constructor F() - Create blueprint for object,Start with Caps
//===============
//new - Creates a new object from a constructor or class.
//===============
//Prototype - Mechanism to share properties between objects
//===============
//Prototype Chain - JS looks up properties through linked prototypes.
//===============
//__proto__ - Points to an object’s prototype
//===============
//Object.getPrototypeOf()- Modern way to get prottoype
//===============
//Class 
//===============
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
const person1 = new Person("Alice", 25);
person1.greet(); // Hello, my name is Alice and I am 25 years old.
//===============
//public&private fields
//===============
class BankAccount{
  #balance=1000; //private - accessed within class only;
  owner='mega'; //public 
  deposit(amount){
    this.#balance+=amount;

  }
 getbalance(){
  return this.#balance;
 }
}
const Account =  new BankAccount();
Account.deposit(4000);
console.log(Account.getbalance()); //cannot access directly private fiels outside 
//===============
//Static method & property
//- only access using class name
//===============
class User{
static name='mega';
}
console.log(User.name);  //mega
let u = new User();
console.log(u.name); //Error
//===============
//Getter & Setter
//getter - Used to read(get) a property value
class Read{
  get name(){
    return 'devi';
  }
}
const r1=new Read();
console.log(r1.name);  //getter
//===================
//setter - Used to update(set) a property value
//_ = internal variable
// Avoids recursion
//Setter  receive only one parameter at a tie
//===================
class Update{
  set name(value){
      this._name = value;
  }
}
const u1 = new Update();
u1.name='sri'; //setter
console.log(u1);
//=======================
//GETTER & SETTER EXAMPLE
//=======================
class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  get fullName() {
    return `${this.first} ${this.last}`;
  }
  set fullName(value) {
    const parts = value.split(" ");
    this.first = parts[0];
    this.last = parts[1];
  }
}
const user = new Person("John", "Doe");
// Using the Getter
console.log(user.fullName); // Output: "John Doe"
// Using the Setter
user.fullName = "Jane Smith"; 
console.log(user.first);    // Output: "Jane"
console.log(user.last);     // Output: "Smith"
//===============
//encapsulation = USE #
//===============
class Page{
#password='varshu@76486';
mail(mailid){
  if(!mailid.includes("@")){
    console.log("Email must contain @");
    return;
  }
  this.mailid=mailid;
}
Login(enteredpassword){
if(!this.mailid){
console.log("You entered Wrong Mail id")
return;
}
if(enteredpassword===this.#password){
  console.log("Login Successfully");
}
else{
  console.log("Inavlid password");
}
}
}
const p1=new Page();
p1.mail("varshu@gmail.com");
p1.Login("dbdcvewghefgh");
//===============
//Abstraction - Hides information
//===============
class CoffeeMachine {
  #boilWater() {
     return "Water is boiling...";
     } // Hidden detail
  #grindBeans() { 
    return "Grinding beans...";
   } 

  makeCoffee() { 
    //show details
    console.log(this.#boilWater());
    console.log(this.#grindBeans());
    return " your coffee ready!";
  }
}
const Machine = new CoffeeMachine();
Machine.makeCoffee(); 
//===============
//Encapsulation 
//===============
//parent and child methods & properties access 
//only one constuctor allowed per class
//constructor = call automatically when new is used
//===============
class Animal {
  constructor(name) {
     this.name = name;
     }
  eat() { 
    console.log(`${this.name} is eating.`); 
  }
}
class Dog extends Animal {
  bark() {
     console.log("Woof!");
     }
}
const myDog = new Dog("whity");
myDog.eat(); // Inherited from Animal
myDog.bark(); // Own method
//==================
//polymorphism
//-one interface multiple implementation
//==================
//Method Overriding
//- class based Polymorphism
//==================
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}
class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}
// Using polymorphism
const animals = [new Animal(), new Dog(), new Cat()];
animals.forEach(a => a.speak());
//======================
//Using super()
//======================
class Employee {
  getSalary() {
    return 10000;
  }
}
class Manager extends Employee {
  getSalary() {
    return super.getSalary() + 5000; // add extra
  }
}
const mgr = new Manager();
console.log(mgr.getSalary()); // 15000










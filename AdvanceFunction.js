//========================
//Async Function
//========================
async function getData() {
  return "Hello";
}
getData().then(console.log); //Hello

async function fetchUser() {
  const response = await fetch("https://fakestoreapi.com/users/1");
  const data = await response.json();
  console.log(data);
}

//========================
//Async Generator function
//========================
async function* getNumbers() {
  yield 1;
  yield 2;
  yield 3;
}
for await (const num of getNumbers()) {
  console.log(num);
}
//========================
//Function contructor - Creates a function dynamicallyh at runtime
//========================
const add = new Function("a", "b", "return a + b");
console.log(add(2, 3));     // 5
//========================
//Bound Function - Creates a new function with this permanently fixed
//========================
const person = {
  name: "Ravi"
};
function greet() {
  console.log(this.name);
}
const boundGreet = greet.bind(person);
boundGreet(); // Ravi
//========================
//Recursive Function A function tnat calls itself
//========================
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
//========================
//Scope chain
//========================
let a = 10;
function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer();

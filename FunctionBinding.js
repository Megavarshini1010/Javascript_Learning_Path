/*TOPIC COVERED - FUNCTION BINDING
1.Implicit binding
2.Explicit Binding
3.call,apply,bind
*///======================
// Implicit binding - Refers only that particular object
//======================
let employee ={
    name:"mega",
    salary:23466645,
    id:"QUI123",
    intro: function(c,d){ 
console.log(this.name + " " +this.salary + " " + (c+d) );
    }
}
employee.intro(12,12);
//=====================
//Explicit binding - Using call,apply,bind
//Binding - lock this to a specific object
//Function binding replaces JavaScript’s dynamic this 
// with a fixed (explicit) this, preventing context loss during function execution.
//=====================
let seeds={
    name:'paddy',
    price:1200
};
function explain(days,area,amount){
    console.log(`${this.name} seed it take ${days} days to grow in  area of ${area} and  price of ${amount} is  ${this.price} rupees`);
}
/*=====================
CALL
- Invoke the function immediately
- You pass arguments one by one(,)
- function.call(context,arg1,arg2,...)
=====================
*/
explain.call(seeds,120,'DELTA','8kg');
//========================
//APPLY
//Pass arguments as an array
//Invokes the function immediately
//========================
const detail=[80,'delta','8kg']
explain.apply(seeds,detail);
//========================
//BIND
//Does not invoke the function immediately
//Perfect for event listener,callback f()
//========================
const newFunc=explain.bind(seeds,180,'delta',750);
newFunc();

































//call
// let person={
//     name:"mega",
//     salary:23445
// }

// // in this call method only check the value of person obj only because in that call parameter we type person object
// employee.intro.call(person,12,78); 
// //apply - must the f()  argument  pass within the array 
// employee.intro.apply(person,[102,78]); 
// let bin = employee.intro.bind(person,str,[102,78]); //must return something 

// console.log(bin());

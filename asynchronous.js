/*TOPIC COVERED - Asynchronous Function
Synchronous - Executes code line by line, blocking the next operation until the current one finishes
Asynchroous - Executes code without blocking, allowing long tasks to run in the background.
Call Stack - LIFO,Execution Engine,Keeps track of function execution
Event Loop - Checks the call stack empty,pushes queued tasks when the stack it empty
Microtask - Stores High priority async function before executed Macrotask(Promise)
Macrotask - Stores regular-priority callbacks executed after microtasks(SetTimeout,SetInterval)
SetTimeout - Executes a function once after a specified delay
SetInterval - Executes a function repeatedly at fixed time intervals(repeated)
---------------EVENT LOOP PRIORITY------------
1.Synchronous function
2.Micro Task 
3.Macro Task 
*/
function f1(){
    console.log("First ")
}
function f2(){
    console.log("second ")
}
function f3(){
    console.log("third ")
}
//==================
//calling function
//==================
f1();
//asyncronous function()
setTimeout(f2,2000)
f3();
//

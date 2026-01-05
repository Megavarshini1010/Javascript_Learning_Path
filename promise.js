/*TOPIC COVERED - Promise

PROMISE STATES
Pending – Initial state, neither fulfilled nor rejected
Fulfilled – Operation completed successfully (resolve)
Rejected – Operation failed (reject)

EXECUTOR FUNCTION
 - The function passed to Promise() is called the executor
 - It runs immediately
 - It has two parameters:
 - resolve() → success
 - reject() → failure

 PROMISE CHAINING - Avoid Callback Hell
 Each .then() returns a new promise
Allows sequential async operations

THEN,CATCH,FINNALY
- .then() handles resolve
- .catch() handles reject
- .finally() runs in all cases
*/

let newpromises = new Promise((resolve,reject )=>{
let   dataReceived = false;
if(dataReceived){
resolve("Data Received")
}
else{
  reject("Data not received")
}
})
  
//error handle using then and catch 
newpromises.then(console.log ).catch(console.log)

// alter way of console.log
newpromises.then((message)=>{   // message = resolve data(content) 
  console.log("Success " + message)
 return "next messsage" + message;
} )
.then((NextMessage)=>{
  console.log(NextMessage);
})
.catch((error)=>{               //error = reject data
console.log("failure " + error)
})
.finally(()=>{
    console.log("End")
})


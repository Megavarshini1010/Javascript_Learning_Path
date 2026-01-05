/*TOPIC COVERED - ASYNC /AWAIT
- Promises solved callback hell, but .then() chaining still became hard to read
- async/await that looks synchronous
- async makes a function always return a Promise
- await pauses execution until the Promise resolves or rejects
- Works only inside async functions
- async, used before function
- await, used before a Promise
ERROR HANDLING 
- TRY & CATCH
*/
let newpromise = new Promise((fullfilled,rejected)=>{
    let datarecieved =false;
    if(datarecieved){
        fullfilled("data transferred");
    }
    else{
        //Only run any one not both
        rejected("Data not received") 
      // or - Error throw explicityly
        throw new Error("Load correct data") //Error is an constructor
    }
}) 
//-----------async,await---------------
async function executepromise(){
try{
    let message = await  newpromise;
    let NextMessage = await newpromise;
    console.log(message);
    console.log( NextMessage);

}catch(error){
    console.log(error.message) //.message returns an error like a message view 
}
finally{
     console.log("End")
}
}
executepromise();
console.log("last")

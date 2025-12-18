/*
Topics covered: JS LOOPS
- for
- while
-do-while
-for...in
- for...of
*/

//=========================
// FOR LOOP
//for(initialization;condition;counter)
//=========================
 for(let i=1;i<10;i++){
    console.log(i);
 }
 //ARRAY IN FOR LOOP
 let arr =[12,234,4,5,67]
for(let i=0;i<arr.length-1;i++){
    console.log(arr[i]);
    }
//STRING IN FOR LOOP
let str ="megavarshini";                      // Each char have an index
for (let i= 0; i<=str.length-1;i++){
 console.log(str[i]);
}
//=========================
// WHILE LOOP
/*
initialization
while(condition){
statement
counter
}
*/
//=========================
let assign=12;
while(assign>1){
    console.log(assign);
assign++;
}
//=========================
// DO-WHILE LOOP
/*
do {
  // code to execute
} while (condition);
*/
//=========================
let i=5;
do{
   console.log(i);
   i++;
} while(i<3);
//=========================
//FOR.....IN LOOP
//=========================
let person1 ={
    uName : "mega",
    hobbies: "cricket",
    walk(){
        console.log("Hii this is mega");
    }

}
for(let key in person1){ // for objects
    console.log(person1[key]);
}
let arr4=["df","dff","dfsaa"]
for(let key in arr4){   //for array
    console.log(key + " " + arr4[key])
}
let str9 = "Sridevi ramesh"
for(let key in str9){   // for string
    console.log(key + str9[key])
}
//=========================
// FOR...OF LOOP
//==========================
//for....of
let arr1 = [21,45,77,9];
for(let iterate of arr1){
   console.log(iterate)
}
let str1="Sridevi";
for(let value of str1){
    console.log(value);
}
//for..of in generator function
function* star(val){
    for(let mmm of val){
    yield mmm;
    }
}
let www= star([1,2,3,4,5,77])
for(let xxx of www){
    console.log(xxx);
}
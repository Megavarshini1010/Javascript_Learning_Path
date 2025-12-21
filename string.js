//========================
//String literals
//========================
//single
let s='Hii';
//double
let names ="Mega"; // Literal = value written directly
//Backticks - E6+ 
/*
- Multi line
-Expressions
-HTML Templates
-Tagged templates
-Preserve exact space,line breaks and tabs
*/
let message=`Hello`;
//========================
//string interpolation
console.log(`${s} this is ${names} from MNC. I am a frontend Developer`)
//========================
//========================
//Accessing characters
//========================
//charAt - ES3
let str="mega";
console.log(str.charAt(0)); 
//Array like access -Modern way
console.log(str[2]);
console.log(str[str.length-1]);
//========================
//concatenation
//========================
//old way
let name = "John";
let age = 25;
let msg ="Name:" +name+", Age:"+ age;
//modern way
let msg1 = `Name: ${name}, Age: ${age}`;
//========================
//case & comparison
//========================
//old - case -sensitive 
let a = "JavaScript";
let b = "javascript";
console.log(a === b); //false
//modern
a.toLowerCase() === b.toLowerCase(); //true
//========================
//Searching & checking
//========================
//old way
let text = "I love JavaScript";
text.indexOf("JavaScript"); // 7
text.indexOf("Python");    // -1
//modern way
text.includes("JavaScript"); // true
text.startsWith("I"); // true
text.endsWith("Script"); // true
//========================
//Extracting & slicing 
//========================
//substring -old
let s1 = "JavaScript";
s.substring(0, 4); // Java
//slice - modern
//support negavtive index
s.slice(0, 4);   // Java
s.slice(-6);     // Script
//========================
//Modify & Replacing
//========================
//old - replace only first match
"hello world".replace(" ", "_");
//modern
"hello world".replace(" ", "_");

//========================
//Trimming & Padding
//========================
//trim methods
str.trim();
str.trimStart();
str.trimEnd();
//padStart
let str1=["7","123","4","5"]
let m= "7".padStart(2, "0"); // "07"
let n = "123".padStart(6, "*"); // "***123"
console.log(m);
console.log(n)
//padEnd
let str2=["7","123","4","5"]
let mm= "7".padEnd(2, "0"); // "07"
let nn = "123".padEnd(6, "*"); // "***123"
console.log(mm);
console.log(nn)
//========================
//Splitting & Joining
//========================
//old
let csv = "a,b,c";
csv.split(",");
//modern
let m4="apple,banana,orange"
console.log( m4.split(",").map(item => item.trim()).join(" | "));
//========================
//String Conversion
//========================
//old
let x = 100 + ""; // "100"
//modern
String(100);     // "100"
Number("100");   // 100
Boolean("text"); // true
//========================
//String ADVANCE
//========================
//charPointAt - best for emoji and UTS-16 also
let chars= "aS💕😒❤️👍👌";
console.log(chars.codePointAt(6))
//at  - returns the char at particular position
let s11= "aS💕😒❤️👍👌";
console.log(s11.at(0))

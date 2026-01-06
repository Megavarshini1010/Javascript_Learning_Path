/* ===============================
- JavaScript Rest & Spread Operator
 ===============================
// -------- SPREAD OPERATOR --------
// Spread operator (...) is used to EXPAND values
*/
// 1. Spread with Arrays
let frontend = ["html", "css", "javascript"];
let backend = ["java", "mysql", "springboot"];

// Merging arrays
let fullstack = [...frontend, ...backend];
console.log("Fullstack Skills:", fullstack);

// Adding new values while spreading
let skills = [...frontend, "react", "node", ...backend];
console.log("Skills:", skills);

// 2. Spread with Objects
let userProfile = {
name: "meha", // property
age: 22,
number: 648769465,
write: function () { // behaviour
console.log("I am writing the story");
}
};

// Copying and extending object
let team2 = {
...userProfile,
employee: 10000,
designation: "frontend"
};
console.log("Team2 Object:", team2);

// Updating existing property using spread
let updatedProfile = {
...userProfile,
age: 25
};
console.log("Updated Profile:", updatedProfile);

// -------- REST PARAMETER --------
// Rest parameter (...) is used to COLLECT values
// ----------Rules ------------------
// - Rest parameter must be the LAST parameter
// - Only one rest parameter is allowed

function restExample(a, d, ...arr) {
console.log("a:", a);
console.log("d:", d);
console.log("rest values:", arr);
}

restExample(3, 5, 7, 8, 9, 9);

// -------- SPREAD IN FUNCTION CALL --------
function add(a, b, c) {
return a + b + c;
}

let numbers = [2, 4, 6];
console.log("Sum:", add(...numbers));

// -------- REST vs SPREAD SUMMARY --------
// Spread (...)  -> Expands values
// Rest (...)    -> Collects values

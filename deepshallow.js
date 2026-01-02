/* TOPIC COVERED = Deep & Shallow copy in JS
===================
SHALLOW COPY
- Object.assign
- Spread Operator(...)[MODERN]
===================
*/
const original = {
  name: "Mega",
  address: {
    city: "New York"
  }
};
const shallowCopy = { ...original };
shallowCopy.name = "devi";
shallowCopy.address.city = "London";
console.log(original.name);          // "Mega"
console.log(original.address.city);  // "London" 

/*===================
DEEP COPY
- structureClone()[MODERN]
- JSON.parse(JSON.strinfy())
===================
*/
const original1 = {
  name: "Mega",
  address: {
          city: "America"
  }
};
const deepCopy = structuredClone(original1);
deepCopy.address.city = "London";
console.log(original1.address.city); // "America" ✅
//===================
//Structured Clone = Not support Functions & DOM nodes
//===================
//===================
//Spread copy...
//===================
const user = { name: "Alice", age: 25 };
const updated = { ...user, age: 26 };
console.log(user);
console.log(updated);
//==================
//Immutability
//==================
const state = {
  user: { name: "Alice", skills: ["JS"] }
};
const newState = {
  ...state,
  user: {
    ...state.user,
    skills: [...state.user.skills, "React"]
  }
};
console.log(state);
console.log(newState);
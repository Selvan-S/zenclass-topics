// var let and const
// re declaration and initialization is possible
var a = 15;
var a = 25;
console.log(a);

// let
let b = 13;
// let b = 15; // redeclaration is not possible
b = 15; // re initialization is possible
console.log(b);

// const
const c = 30;
// const c = 25; // re declaration is not possible
// c = 35; // re initilization is not possible
console.log(c);

// block scope (let and const)
if (true) {
  const x = "cody";
  console.log(x);
}
const x = "selvan";
console.log(x);

// Shadowing property
if (true) {
  const shadow_var = "cody";
  console.log(shadow_var);
  if (true) {
    let shadow_var = "selvan";
    console.log("selvan block: ", shadow_var);
  }
  if (true) {
    console.log(shadow_var);
  }
}
// Spread and rest operator
// Spread operator
const col_arr = ["mango", 5, "chocolate", "milk", { Name: "Cody" }];
console.log(...col_arr);
//spread and rest operator
//                            Rest operator
//                               VVVVVVV
function getAllData(data1, data2, ...all) {
  console.log(data1);
  console.log(data2);
  console.log("Reamaining all: ", ...all); // < Spread operator
}
getAllData("c", "s", 23, 5, 2024);

// Array destructuring..
// ["ele", "ele2"]
const studArr = ["subash", "sanjai", ["aravind", "prahsall"]];

const men_Arr = [1, 3, 5, 6, ["sanjay", 25], 9];
const [, , , , [mentorName, mentorAge]] = men_Arr;
console.log(mentorName, mentorAge);

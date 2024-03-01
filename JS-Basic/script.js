console.log("Hello world!!", "hi");
let a = 1;
let b = 3
console.log(a + b)

// Data Types

// Primitive Datatypes

// Number -> 
console.log(typeof 5) // integer or float values
// string =>
console.log(typeof "5"); // character encoded in "" or ''
// Boolean =>
console.log(typeof true) // true or false

// Non primitive data types [copy by value]

let arr = [1, 2, 3, 4, 5]; //array
console.log(typeof arr, arr);

let obj = { 1: "1" }; //Objects
console.log(typeof obj, obj)


// Non primitive datatypes (arr, obj) [copy by reference]
let sam_arr = [1, 2, 3];
let sam_arr2 = sam_arr;
console. log(sam_arr); 
console.log(sam_arr2) ;
sam_arr2[1] = 4;
console. log(sam_arr); 
console.log(sam_arr2);

// Deep copy
let ano_arr = [5, 6, 8];
let ano_arr2 = Object.assign([], ano_arr);
console.log(ano_arr);
console.log(ano_arr2);
ano_arr2[3] = 6;
console.log(ano_arr);
console.log("ano_arr2", ano_arr2);

// console.log(window.document) // it executed first !!!
sayMyName();

// This function will print my name
// Function declaration
function sayMyName() {
  console.log("I am Cody");
}

// Adding parameters and arguments
function addTwoNumbers(num1, num2) {
  const value = num1 + num2;
  console.log(value);
}

addTwoNumbers(23, 5);

function isDivisible(num, divisor) {
  if (num % divisor === 0) {
    return true;
  } else return false;
}

console.log(isDivisible(10, 2));

//ES-6 (anonymous functions)

let anon_func = function (param) {
  console.log("I'm anonymous function", param);
};
anon_func("new param");

// Arrow function
// we dont need to have any return keyword in single line
let arrow_func = (a, b) => a + b;
console.log("function value", arrow_func(30, 10)); //20

//IIFE(Immediatly invoked function)
(function callMe(name) {
  console.log("I'm called", name);
})("immediate");

//IIFE
(function printOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
})([1, 2, 3, 4, 5, 6, 7]);

//Anonymous
let printOddNumber = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
};

printOddNumber([1, 2, 3, 4, 5, 6, 7]);

//Arrow function
let printOddinArrow = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
};

printOddinArrow([1, 2, 3, 4, 5, 6, 7]);

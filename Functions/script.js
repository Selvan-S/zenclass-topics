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

const inputField = document.querySelector("#input");
console.log(inputField);

const calculateBtn = document.querySelector("#calculate");
const result = document.querySelector("#result");

const myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", (e) => {
  const inputFieldValue = inputField.value;
  e.preventDefault();
  result.innerHTML = `${inputFieldValue} = ${eval(inputFieldValue)}`;
});

console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);
console.log(3);
console.log(4);
console.log(5);

// Promise function
// Make Delay
console.log("working");
function makeDelay(delay) {
  return new Promise((res, rej) => {
    if (delay < 1000) {
      rej("[Error] cannot make delay less than a second");
    } else {
      setTimeout(() => {
        res(4000);
      }, delay);
    }
  });
}

console.log(makeDelay(2001));

async function execute() {
  try {
    console.log("Operation1");
    console.log("Operation2");
    let delay = await makeDelay(3000);
    console.log(delay);
    console.log("Operation3");
    delay = await makeDelay(delay);
    console.log(delay);
    console.log("Operation4");
    print(delay);
    return "hi";
  } catch (error) {
    console.log(error);
  }
}
// execute().then((data) => console.log(data));
function print(params) {
  console.log("ehllo", params);
}
const resultSpan = document.querySelector("#result");

async function fetchData() {
  const country = await fetch("https://restcountries.com/v3.1/all", {
    method: "GET",
  });
  const data = await country.json();

  renderAllCards(data);
}

fetchData();

function renderAllCards(data) {
  data.map((val) => {
    createCard(val);
  });
}

function createCard(data) {
  console.log(data);
  resultSpan.innerHTML += `<h1 style="margin: 3rem;">${data.name.common}</h1>`;
}

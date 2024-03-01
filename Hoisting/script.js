// Hoisting

// console.log(a);
// var a = 15;
// console.log(a);
// document.getElementById('a').innerHTML = a;

// console.log(b)
// let b = 15;
// console.log(b)
// document.getElementById('b').innerHTML = b;

// Array and Object iteration
//array
let arr = ["cody", 1, true, { pos: "Student", id: 1 }, [2, 5]];

//object (JSON - )

let obj = {
  name: "cody",
  value: 1,
  isMember: true,
  posArr: ["cody", 1, true],
  demObj: {
    pos: "Student",
    id: 2,
  },
};

// dot opertions
console.log(obj.demObj.pos);

// Map operations
console.log(obj["isMember"]);

fetch("./sample.json")
  .then((data) => data.json())
  .then((data) => console.log(data));

let print_var = document.getElementById("print");
function print() {
    print_var.innerHTML = "Hello world!";
    document.getElementById("a").innerHTML = print_var.innerText;
    document.getElementById("b").innerHTML = print_var.outerText;
}

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  console.log(data[0]);
};
const dummyJson = {
  name: "sanjay",
};

const strJson = JSON.stringify(dummyJson);
console.log(dummyJson); //{name : "sanjay"}
console.log(strJson); //"{name: 'sanjay'}"
const convJson = JSON.parse(strJson);
console.log(convJson); //{name : "sanjay"}
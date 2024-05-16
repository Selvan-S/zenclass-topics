const newDiv = document.createElement("div");

newDiv.setAttribute("class", "class1 class2");
newDiv.setAttribute("id", "id1");
newDiv.innerHTML = "cody";
document.body.appendChild(newDiv);
console.log(newDiv);

// Query Selector all

const allQueryEle = document.querySelectorAll(".query-class");

const colorList = ["red", "blue", "green", "orange"];

allQueryEle.forEach((element, index) => {
  element.style.backgroundColor = [colorList[index]];
});

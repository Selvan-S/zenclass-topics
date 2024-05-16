function alertMsg(msg) {
  // doesn't return anything
  //but just gives an alert message in the browser
  // and blocks the next code
  alert(msg);
}
// alertMsg("Sample alert message");
function promptmsg(que, def) {
  //promt return the user writen data or default value
  // if cancel returns null
  const resultMsg = prompt(que, def);
  const promptmsgspan = document.querySelector("#promptmsg");
  promptmsgspan.innerHTML = resultMsg;
}
// promptmsg("cody", "this an name");
function confirmMsg(checkMsg) {
  // If okay returns a boolean value of true
  // if cancel returns a boolean value of false.
  const resultMsg = confirm(checkMsg);
  const confirmMsgspan = document.querySelector("#confirmMsg");
  confirmMsgspan.innerHTML = resultMsg;
}
// confirmMsg("Are you sure?");

const formElement = document.querySelector("#userForm");
const userData = {};
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  userData.name = formElement[0].value;
  userData.batch = formElement[1].value;
  userData.age = formElement[2].value;
  console.log(userData);
});

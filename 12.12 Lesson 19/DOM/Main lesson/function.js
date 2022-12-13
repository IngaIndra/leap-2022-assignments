document.getElementById("helloText").innerHTML = "Hello World :)";

const txt = "Hello World";
document.getElementsByClassName("helloText")[0].innerHTML = "Hello World";

const items = document.getElementsByClassName("dummy");
for (let i = 0; i < items.length; i++) {
  items[i].innerHTML = `<b>Hello dummy div ${i + 1}</b>`;
}

document.getElementById("demo").innerHTML = "Date : " + Date();

document.getElementById("test").style.color = "#f00";
document.getElementById("test").style.fontSize = "30px";
document.getElementById("test").style.textAlign = "center";

//random color every refresh
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function getRandomColor() {
  const green = getRandomNumber(0, 255);
  const red = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}
const htmlTag = document.querySelector("html");
htmlTag.style.backgroundColor = getRandomColor();

//Ehniih ni buruu bichigleltei 2dah ni zuv bichigleltei. Yagaad gevel hamgiin suuld () avbal shuud function-g ajilluulna, click darahaas umnu unguu uurchilnu gesen ug.
// let myButton = document.getElementById("myBtn");
// function changeBackgroundColor() {
//   myButton.style = "background-color: green";
// }
// myButton.addEventListener("click", changeBackgroundColor());

//ene ni zuv bichiglel hamgiin suuld ()-gui bolohoor click darsnii daraa l unguu solino gesen ug.
// let myButton = document.getElementById("myBtn");
// function changeBackgroundColor() {
//   myButton.style = "background-color: green";
// }
// myButton.addEventListener("click", changeBackgroundColor);

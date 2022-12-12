//Random color generator
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

const myButton = document.getElementById("myBtn");

myButton.addEventListener("click", function () {
  htmlTag.style.backgroundColor = getRandomColor();
});

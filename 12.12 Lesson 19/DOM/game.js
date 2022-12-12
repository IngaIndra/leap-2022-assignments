const parent = document.querySelector("ul");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomColor() {
  //RGB
  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);
  return [red, green, blue];
}
const tileCount = 4;

function getDifferentColor(colors) {
  const random = getRandomNumber(0, 2);
  const newColors = [...colors];
  let color = newColors[random];
  if (color > 126) {
    color -= 100;
  } else {
    color += 100;
  }
  newColors[random] = color;
  return `rgb(${newColors[0]}, ${newColors[1]}, ${newColors[2]})`;
}

const colors = getRandomColor();

const randomIndex = getRandomNumber(0, 3);

for (let i = 0; i < tileCount; i++) {
  const li = document.createElement("li");
  if (i !== randomIndex) {
    li.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
  } else {
    li.style.backgroundColor = getDifferentColor(colors);
  }

  parent.appendChild(li);
}

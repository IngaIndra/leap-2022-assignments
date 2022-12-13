// let isTimeOut = false;
// let score = 0;

// let seconds = 0;
// let minutes = 0;

// function updateTimer() {
//   seconds += 1;
//   if (seconds === 60) {
//     minutes += 1;
//     seconds = 0;
//   }
//   console.log(`${minutes}:${seconds}`);
// }
// const interval = setInterval(updateTimer, 1000);

// const scoreTarget = document.querySelector("#scoreTarget");

// function updateScore(point) {
//   score += point;
//   scoreTarget.innerHTML = score;
// }

// const parent = document.querySelector("ul");

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// function getRandomColor() {
//   //RGB
//   const red = getRandomNumber(0, 255);
//   const green = getRandomNumber(0, 255);
//   const blue = getRandomNumber(0, 255);
//   return [red, green, blue];
// }

// function getDifferentColor(colors) {
//   const random = getRandomNumber(0, 2);
//   const newColors = [...colors];
//   let color = newColors[random];
//   if (color > 126) {
//     color -= 100;
//   } else {
//     color += 100;
//   }
//   newColors[random] = color;
//   return `rgb(${newColors[0]}, ${newColors[1]}, ${newColors[2]})`;
// }

// const timer = setTimeout(function () {
//   isTimeOut = true;
// }, 10000);

// function reDraw() {
//   parent.innerHTML = "";
//   const colors = getRandomColor();

//   const randomIndex = getRandomNumber(0, 3);
//   const tileCount = 9; //if - this score, add more tiles etc.
//   for (let i = 0; i < tileCount; i++) {
//     const li = document.createElement("li");
//     const isNormal = i !== randomIndex;
//     if (isNormal) {
//       li.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
//     } else {
//       li.style.backgroundColor = getDifferentColor(colors);
//     }
//     li.addEventListener("click", function () {
//       if (!isTimeOut) {
//         if (!isNormal) {
//           updateScore(1);
//           if (score > 5) {
//             clearTimeout(timer);
//           }
//           reDraw();
//         } else {
//           updateScore(-2);
//         }
//       } else {
//         alert("Time ran out, your score is:", +score);
//       }
//     });
//     parent.appendChild(li);
//   }
// }

// reDraw();

let SCORE = 0;
const TILE_COUNT = 9;
const TIMER = 10;
let MILLISECONDS = 0;
let SECONDS = TIMER;
let isGameStarted = false;
let isGameOver = false;
let countDown;

const scoreTarget = document.querySelector("#scoreTarget");
const gameOverScoreTarget = document.querySelector("#gameOverTarget");
const parent = document.querySelector("ul");
const timerTarget = document.querySelector("h5");
const gameOverScreen = document.querySelectorAll(".game-over-screen")[0];
const tryBtn = document.querySelector(".try-button");

const tryGame = () => {
  updateScore(0 - SCORE);
  SECONDS = TIMER;
  MILLISECONDS = 0;
  isGameOver = false;
  gameOverScreen.classList.remove("active");
  countDown = setInterval(updateTimer, 10);
  reDraw();
};

function gameOver() {
  //alert("Game is over, you scored:" + SCORE);
  console.log(gameOverScreen.classList.add("active"));
  isGameOver = true;
}

function updateTimer() {
  if (MILLISECONDS <= 0) {
    SECONDS--;
    MILLISECONDS = 990;
  }
  MILLISECONDS -= 10;
  if (SECONDS <= 0 || (MILLISECONDS <= 0 && SECONDS <= 0)) {
    MILLISECONDS = 0;
    SECONDS = 0;
    clearInterval(countDown);
    gameOver();
  }
  let timerResult = "";
  if (SECONDS < 10) {
    timerResult += "0";
  }
  timerResult += SECONDS;
  timerResult += ":";
  if (MILLISECONDS < 100) {
    timerResult + "0";
  }
  if (MILLISECONDS < 10) {
    timerResult + "0";
  }
  timerResult += MILLISECONDS;

  timerTarget.innerHTML = timerResult;
}

function updateScore(point) {
  SCORE += point;
  scoreTarget.innerHTML = SCORE;
  gameOverScoreTarget.innerHTML = SCORE;
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
function getRandomColor() {
  // RGB
  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);
  return [red, green, blue];
}

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

function reDraw() {
  SECONDS = 10;
  parent.innerHTML = "";
  const colors = getRandomColor();

  const randomIndex = getRandomNumber(0, TILE_COUNT - 1);

  for (let i = 0; i < TILE_COUNT; i++) {
    const li = document.createElement("li");
    const isNormal = i !== randomIndex;
    if (isNormal) {
      li.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
    } else {
      li.style.backgroundColor = getDifferentColor(colors);
    }
    li.addEventListener("click", function () {
      if (!isGameStarted) {
        if (countDown) clearInterval(countDown);
        countDown = setInterval(updateTimer, 10);
      }
      if (!isNormal) {
        updateScore(1);
        reDraw();
      } else {
        //updateScore(-1);
        SECONDS -= 2;
      }
    });
    parent.appendChild(li);
  }
}

reDraw();

tryBtn.addEventListener("click", tryGame);

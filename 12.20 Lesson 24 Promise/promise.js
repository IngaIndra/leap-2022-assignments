// function getAnEgg() {
//   const eggCount = 12;
//   const promise = new Promise((resolve, reject) => {
//     if (eggCount > 0) {
//       setTimeout(() => {
//         resolve(true);
//       }, 1000);
//     } else {
//       reject("Run out of egg");
//     }
//   });
//   return promise;
// }

// function pickAnPot() {
//   const isPotInUse = false; //saviig ashiglahgu baih
//   const promise = new Promise((resolve, reject) => {
//     if (!isPotInUse) {
//       setTimeout(() => {
//         resolve(true);
//       }, 1000);
//     } else {
//       reject("Pot is in use");
//     }
//   });
//   return promise;
// }

// function fillWater() {
//   const isWaterRunning = true;
//   const promise = new Promise((resolve, reject) => {
//     if (isWaterRunning) {
//       setTimeout(() => {
//         resolve(true);
//       }, 1000);
//     } else {
//       reject("No water");
//     }
//   });
//   return promise;
// }

// function startStove() {
//   const isStoveWorking = true;
//   const promise = new Promise((resolve, reject) => {
//     if (isStoveWorking) {
//       setTimeout(() => {
//         resolve(true);
//       }, 1000);
//     } else {
//       reject("Stove is not working");
//     }
//   });
//   return promise;
// }

// function boilEgg() {
//   const timer = 10;
//   const promise = new Promise((resolve, reject) => {
//     if (timer >= 10) {
//       setTimeout(() => {
//         resolve("Cooked egg");
//       }, 3000);
//     } else {
//       reject("timer was too short got raw egg");
//     }
//   });
//   return promise;
// }

// const cookedEgg = getAnEgg()
//   .then((res) => {
//     console.log(res);
//     console.log("picked an egg");
//     return pickAnPot();
//   })
//   .then((res) => {
//     console.log(res);
//     console.log("picked an pot");
//     return fillWater();
//   })
//   .then((res) => {
//     console.log(res);
//     console.log("filled pot");
//     return startStove();
//   })
//   .then((res) => {
//     console.log(res);
//     console.log("started stove");
//     return boilEgg();
//   })
//   .then((res) => {
//     console.log("boiled an egg");
//     return console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const puzzle = [
  ['🍕','🍓','💩','🍌'],
  ['🧁','🍕','🦄','👻'],
  ['🍄','👻','🦄','🧁'],
  ['🍌','🍄','💩','🍓' ],
];

let found = 0;
let flippedItems = [];

function getTile(value) {
  const tile = document.createElement("li");

  const tileFront = document.createElement("div");
  tileFront.innerHTML = value;
  tileFront.classList.add("front");
  tile.appendChild(tileFront);

  const tileBack = document.createElement("div");
  tileBack.classList.add("back");
  tile.appendChild(tileBack);

  tile.setAttribute("val", value);

  tile.addEventListener("click", function () {
    tile.classList.add("active");
    flippedItems.push(tile);

    console.log(flippedItems);

    if (flippedItems.length >= 2) {
      if (
        flippedItems[0].getAttribute("val") ===
        flippedItems[1].getAttribute("val")
      ) {
        flippedItems[0].classList.add("found");
        flippedItems[1].classList.add("found");
        flippedItems = []; //massive-aa hoosloj bga reset
      } else {
        setTimeout(() => {
          for (let i = 0; i < flippedItems.length; i++)
            flippedItems[i].classList.remove("active");
          flippedItems = [];
        }, 1000);
      }
    }
  });

  return tile;
}

const gameTarget = document.querySelector("#gameTarget");

for (let row = 0; row < puzzle.length; row++) {
  const rowItems = puzzle[row];
  for (let col = 0; col < rowItems.length; col++) {
    gameTarget.appendChild(getTile(rowItems[col]));
  }
}

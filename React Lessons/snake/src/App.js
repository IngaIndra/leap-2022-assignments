import { useEffect, useState } from "react";
import "./App.css";

const xCells = 10;
const yCells = 10;

const tileWidth = 50;
const tileHeight = 50;
const bodyColor = "#00ff00";
const headColor = "#ff0000";
const foodColor = "#ffff00";
const speed = 200;

function Tile({ x, y, isHead, isFood }) {
  const style = {
    top: y * tileHeight,
    left: x * tileWidth,
    position: "absolute",
    width: tileWidth,
    height: tileHeight,
    backgroundColor: isHead ? headColor : bodyColor,
  };
  return <div style={style}></div>;
}

function App() {
  const directions = ["Up", "Left", "Down", "Right"];
  const [counter, setCounter] = useState(0);
  const [food, setFood] = useState([{ x: 5, y: 5 }]);
  const [direction, setDirection] = useState("Down");
  const [snake, setSnake] = useState([
    { x: 0, y: 2 },
    { x: 0, y: 1 },
    { x: 0, y: 0 },
  ]);

  const changeDirection = (movingDir) => {
    const index = directions.findIndex((d) => d === movingDir);
    if (index !== -2) {
      const currentIndex = directions.findIndex((d) => d === direction);

      if (index % 2 !== currentIndex % 2) {
        setDirection(movingDir);
      }
    }
  };

  // const showFood = () => {
  //   let newFood = [...food];
  //   const randNum = Math.round(Math.random() * ());
  //   return randNum;
  // };

  const moveDown = () => {
    let newSnake = [...snake];
    newSnake = newSnake.map((item, index) => {
      if (index === 0) {
        if (item.y > yCells - snake.length + 1) {
          return { x: item.x, y: 0 };
        }
        return { x: item.x, y: item.y + 1 };
      }

      return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };
    });
    setSnake(newSnake);
  };

  const moveRight = () => {
    let newSnake = [...snake];
    newSnake = newSnake.map((item, index) => {
      if (index === 0) {
        if (item.x > xCells - snake.length + 1) {
          return { x: 0, y: item.y };
        }
        return { x: item.x + 1, y: item.y };
      }
      return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };
    });
    setSnake(newSnake);
  };

  const moveUp = () => {
    let newSnake = [...snake];
    newSnake = newSnake.map((item, index) => {
      if (index === 0) {
        if (item.y === 0) {
          return { x: item.x, y: yCells - 1 };
        }
        return { x: item.x, y: item.y - 1 };
      }
      return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };
    });
    setSnake(newSnake);
  };

  const moveLeft = () => {
    let newSnake = [...snake];
    newSnake = newSnake.map((item, index) => {
      if (index === 0) {
        if (item.x === 0) {
          return { x: xCells - 1, y: item.y };
        }
        return { x: item.x - 1, y: item.y };
      }
      return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };
    });
    setSnake(newSnake);
  };

  const handleKeyDown = (e) => {
    console.log(e.key);
    switch (e.key) {
      case "ArrowDown":
        changeDirection("Down");
        break;
      case "ArrowRight":
        changeDirection("Right");
        break;
      case "ArrowUp":
        changeDirection("Up");
        break;
      case "ArrowLeft":
        changeDirection("Left");
        break;
      default:
        console.log("Non binary key");
    }
  };

  useEffect(() => {
    switch (direction) {
      case "Up":
        moveUp();
        break;
      case "Down":
        moveDown();
        break;
      case "Left":
        moveLeft();
        break;
      case "Right":
        moveRight();
        break;
      default:
        console.log("non binary direction");
    }
  }, [counter]);

  setTimeout(() => {
    setCounter(counter + 1);
  }, speed);

  return (
    <div className="wrapper" onKeyDown={handleKeyDown} tabIndex={0}>
      <h1>Snake game</h1>
      <div
        className="board"
        style={{ width: xCells * tileWidth, height: yCells * tileHeight }}
      >
        {snake.map((item, index) => {
          const isHead = index === 0;
          return (
            <Tile
              x={item.x}
              y={item.y}
              isHead={isHead}
              key={`snake-tile-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

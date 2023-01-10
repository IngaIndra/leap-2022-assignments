import { useState } from "react";
import "./App.css";

function App() {
  const [puzzle, setPuzzle] = useState([
    [4, 4, 8, 16],
    [4, 2, 8, 2],
    [16, 8, 2, null],
    [4, 2, 4, null],
  ]);

  const PuzzleRow = ({ row }) => {
    return row.map((col, index) => (
      <div key={`col-${index}`} className={`tile tile-${col}`}>
        {col}
      </div>
    ));
  };

  const rotatePuzzle = (puzzle) => {
    const newPuzzle = [];
    for (let i = 0; i < 4; i++) {
      newPuzzle.push([]);
    }
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        newPuzzle[j].push(puzzle[i][j]);
      }
    }
    return newPuzzle;
  };

  const moveLeft = (puzzle) => {
    const newPuzzle = [];
    for (const row of puzzle) {
      const filteredCols = row.filter((col) => col !== null);
      const newRow = [];

      for (let i = 0; i < filteredCols.length; i++) {
        if (filteredCols[i] === filteredCols[i + 1]) {
          newRow.push(filteredCols[i] + filteredCols[i + 1]);
          i++;
        } else {
          if (filteredCols[i]) newRow.push(filteredCols[i]);
        }
      }

      for (let i = 0; i < 4; i++) {
        if (!newRow[i]) newRow.push(null);
      }
      newPuzzle.push(newRow);
    }
    return newPuzzle;
  };

  const moveRight = (puzzle) => {
    const newPuzzle = [];
    for (const row of puzzle) {
      const filteredCols = row.filter((col) => col !== null);
      const newRow = [];

      for (let i = filteredCols.length - 1; i >= 0; i--) {
        if (filteredCols[i] === filteredCols[i - 1]) {
          newRow.push(filteredCols[i] + filteredCols[i - 1]);
          i--;
        } else {
          if (filteredCols[i]) newRow.push(filteredCols[i]);
        }
      }

      for (let i = 0; i < 4; i++) {
        if (!newRow[i]) newRow.push(null);
      }
      newPuzzle.push(newRow.reverse());
    }
    return newPuzzle;
  };

  const moveUp = (puzzle) => {
    let result = rotatePuzzle(puzzle);
    result = moveLeft(result);
    result = rotatePuzzle(result);
    return result;
  };
  const moveDown = (puzzle) => {
    let result = rotatePuzzle(puzzle);
    result = moveRight(result);
    result = rotatePuzzle(result);
    return result;
  };

  const handleKeys = (e) => {
    switch (e.key) {
      case "ArrowDown":
        setPuzzle(moveDown(puzzle));
        break;
      case "ArrowUp":
        setPuzzle(moveUp(puzzle));
        break;
      case "ArrowLeft":
        setPuzzle(moveLeft(puzzle));
        break;
      case "ArrowRight":
        setPuzzle(moveRight(puzzle));
        break;
      default:
        console.log("non binary key");
        break;
    }
  };

  return (
    <div className="wrapper" onKeyDown={handleKeys} tabIndex={0}>
      <h1>2048</h1>
      <div className="board">
        {puzzle.map((row, index) => (
          <PuzzleRow row={row} key={`row-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default App;

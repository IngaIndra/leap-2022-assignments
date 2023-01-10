import { useState } from "react";
import "./App.css";

function App() {
  const [puzzle, setPuzzle] = useState([
    [4, null, null, 2],
    [null, null, null, null],
    [null, null, null, null],
    [4, 2, null, null],
  ]);

  const PuzzleRow = ({ row }) => {
    return row.map((col, index) => (
      <div key={`col-${index}`} className={`tile tile-${col}`}>
        {col}
      </div>
    ));
  };

  const moveLeft = () => {
    const newPuzzle = [];
    for (const row of puzzle) {
      const filteredCols = row.filter((col) => col !== null);
      const newRow = [];
      for (let i = 0; i < filteredCols.length; i++) {
        if (filteredCols[i] === filteredCols[i + 1]) {
          newRow.push(filteredCols[i] + row[i + 1]);
          i++;
        }
        if (filteredCols[i + 1] === undefined) {
        }
      }
    }
    setPuzzle(newPuzzle);
  };

  return (
    <div className="wrapper">
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

//Pascal's triangle
let input = Number(window.prompt("Enter number here"));
function pascal(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  let result = [];
  for (let row = 1; row <= numRows; row++) {
    let arr = []; //save row value
    for (let col = 0; col < row; col++) {
      if (col === 0 || col === row - 1) {
        arr.push(1);
      } else {
        arr.push(result[row - 2][col - 1] + result[row - 2][col]);
      }
    }
    result.push(arr); //push value here
  }
  return result;
}

// console.log(pascal(input));
const arr = pascal(input);

let string = "";
// External loop
for (let i = 0; i < arr.length; i++) {
  // printing spaces
  for (let j = 1; j <= arr.length - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < arr[i].length; k++) {
    string += " " + arr[i][k];
    // console.log(i, k);
  }
  string += "\n";
}
console.log(string);

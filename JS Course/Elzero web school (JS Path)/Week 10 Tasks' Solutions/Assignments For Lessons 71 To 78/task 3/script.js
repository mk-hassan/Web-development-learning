let myArray = ["E", "l", "z", ["e", "r"], "o"];

let res = myArray.reduce((prev, curr) => prev + curr)
  .split(",")
  .reduce((prev, curr) => prev + curr);

console.log(res);
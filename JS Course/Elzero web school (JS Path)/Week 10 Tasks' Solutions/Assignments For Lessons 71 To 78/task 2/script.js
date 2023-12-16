let myString = "EElllzzzzzzzeroo";

console.log(
  myString.split("")
    .filter((_, index, arr) => arr[index] !== arr[index + 1])
    .reduce((prev, curr) => prev + curr, "")
);
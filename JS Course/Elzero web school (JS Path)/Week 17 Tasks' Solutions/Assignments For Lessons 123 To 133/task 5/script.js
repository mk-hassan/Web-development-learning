"use strict"

let theName = "Elzero";

console.log([...theName])
console.log(theName.split(""));
console.log(Array.from(theName));
console.log([...new Set(theName)]);
console.log(Array.from(new Set(theName)));
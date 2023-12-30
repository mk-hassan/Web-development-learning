"use strict"

let setOfNumbers = new Set().add(10);
setOfNumbers.add(20);
setOfNumbers.add(setOfNumbers.size);

console.log(setOfNumbers);

console.log(Array.from(setOfNumbers)[setOfNumbers.size - 1]);
/*
  Array Challenge
*/

let zero = 0; // 0

let counter = 3; // 2

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my = my.slice(zero, ++counter).reverse(); // ["Osama", "Elham", "Mazero", "Ahmed"]

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, --counter)); // ["Elham", "Mazero"]

console.log(my[zero].slice(--zero, -counter) + my[--counter].slice(counter)); // "Elzero"

console.log(my[my.length - counter].substr(-counter, --counter) + my[zero][zero]); // "rO"
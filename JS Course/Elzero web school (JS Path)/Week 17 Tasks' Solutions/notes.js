"use strict"

// array.some(function(element, index, array): boolean, this): boolean => checks if any element satisfies the predicate
// array.every(function(element, index, array): boolean, this): boolean => checks if all elements satisfies the predicate
// the this argument is considered as the  content into which the function is running.
// the arrow functions don't have their own (this) but follow the context of outer container.
let names = ["kamal", "ahmed", "huda", "mgz"];
console.log(names.some(element => element.length === 3));

let authentic = {
  allowedAge: 18,
  isAllowed(applicant) {
    console.log(applicant);
    return applicant.age >= this.allowedAge;
  },
};

let applicants = [{name: "ahmed", age: 22}, {name: "kamal", age: 16}, {name: "huda", age: 12}];
console.log(applicants.some(authentic.isAllowed, authentic)); // authentic is the context, this = authentic

let dummy = 12;
let numbers = [44, 99, 11, 20];
console.log(numbers.some(function(number) { console.log(number, this); return number + 1 === this; }, dummy));


// array.copyWithin(target, start = 0, end = array.length)
// copies subarray[start:end] not including end to the target position.
let prices = [999.98, 11999.99, 2e4, 3299283e-3];
prices.copyWithin(2, -1).copyWithin(0, 1);
console.log(prices);

// Array.from(Iterable, mapFunction, this): new array
// building an array from an Iterable container after applying some mapping function on its elements.
let arr = [1, 1, 1, 4, 4, 2, 5, 10];
let unique = new Set(arr);
let res = Array.from(unique); // let res = [...new Set(arr)] using spread operator
console.log(res);

function argsArr() {
  return arguments; // creating array of the passed arguments
}
console.log(argsArr(1, 2, 3, "ahmed"));


// spread operator (...Iterable) it like extracts the content as is

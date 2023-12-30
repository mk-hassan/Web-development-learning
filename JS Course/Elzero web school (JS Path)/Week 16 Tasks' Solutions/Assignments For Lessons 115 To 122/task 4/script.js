"use strict"

const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

let {age: a, working: w, country: c, hobbies: [h1, , h3]} = member;

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
console.log(`I Live in ${c}`);
console.log(`My hobbies: ${h1} And ${h3}`);
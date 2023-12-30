"use strict"

/*
  Destructuring
  - Challenge
*/

let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let {title, age, available, skills: [, skill2]} = myFriends[chosen];

console.log(title);
console.log(age);
console.log(available ? 'available' : 'not available');
console.log(skill2);
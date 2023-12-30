"use strict"

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let map = new Map(Object.entries(myInfo));

console.log(map);
console.log(map.size);
console.log(map.has("role"));
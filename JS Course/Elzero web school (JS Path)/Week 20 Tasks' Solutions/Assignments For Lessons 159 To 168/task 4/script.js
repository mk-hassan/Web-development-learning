"use strict"

let birth1 = new Date(1999, 8, 6);
let birth2 = new Date('1999-9-6');
let birth3 = new Date(birth2);

console.log(birth1.toString());
console.log(birth2.toString());
console.log(birth3.toString());
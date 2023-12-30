"use strict"

let chars = ["Z", "Y", "A", "D", "E", 10, 1];
chars.sort();
let no = chars.reduce((acc, ele) => acc + (typeof(ele) === 'number'), 0);
chars.copyWithin(0, no, 2 * no);
console.log(chars);

chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
chars.sort();
no = chars.reduce((acc, ele) => acc + (typeof(ele) === 'number'), 0);
chars.copyWithin(0, no, 2 * no);
console.log(chars);

chars = ["Z", "Y", "A", "D", "E", 10, 1];
chars.copyWithin(2);
console.log(chars);
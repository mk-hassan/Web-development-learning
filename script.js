"use strict"

let obj1 = {
  prop: 1,
};

let obj2 = {
  prop: 2,
  12.9: 23,
  true: 9910,
};

let obj3 = {
  prop: 3,
};

let res = Object.assign(obj1, obj2);

console.log(obj1);
console.log(res);
console.log(res === obj1);

res.prop = 100;
console.log(obj1);

res[12.1] = 100;
console.log(obj1);

res[oop] = "oop";
console.log(res.oop);

"use strict"

let theNumber = 100020003000;

let res = Array.from(new Set(`${theNumber}`), ele => ele === '0' ? "" : ele).join("");

console.log(Number(res));
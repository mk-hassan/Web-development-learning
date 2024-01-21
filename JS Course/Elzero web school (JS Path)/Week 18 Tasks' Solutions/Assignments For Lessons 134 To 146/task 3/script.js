"use strict"

let phone = "+(995)-123 (4567)";
let reg = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/;

console.log(reg.test(phone));
"use strict"

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let reg = /0.+0/ig;

console.log(reg.test(specialNames));
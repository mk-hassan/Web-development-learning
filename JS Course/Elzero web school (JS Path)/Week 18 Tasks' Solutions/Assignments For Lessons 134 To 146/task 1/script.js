"use strict"

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let reg = /([\d\w]{1,4}:){7}[\d\w]{1,4}/ig;

console.log(ip.match(reg));
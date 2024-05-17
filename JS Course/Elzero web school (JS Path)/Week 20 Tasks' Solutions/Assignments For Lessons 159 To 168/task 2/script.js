"use strict"

let origin = new Date(0);

origin.setFullYear(origin.getFullYear() + 1);
origin.setSeconds(origin.getSeconds() + 1);

console.log(origin);
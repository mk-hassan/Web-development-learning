"use strict"
let microtime = require('microtime');

let start = microtime.now();

for(let i = 0; i < 99999; ++i) {
  console.log(i);
}

let bench = microtime.now() - start;

console.log(`${bench}micros seconds`);
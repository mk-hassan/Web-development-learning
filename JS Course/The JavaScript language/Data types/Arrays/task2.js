"use strict"

let styles = new Array("Jazz", "Blues");

styles.push("Rock-n-Roll");
styles[Math.trunc(styles.length / 2)] = "Classics";

console.log(styles.shift());

styles.unshift("Rap", "Ragge");
console.log(styles);

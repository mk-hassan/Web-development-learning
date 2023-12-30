"use strict"

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

let [[c, , a], [, , b]] = [arr1, arr3];

console.log(`My Best Friends: ${a}, ${b}, ${c}`);
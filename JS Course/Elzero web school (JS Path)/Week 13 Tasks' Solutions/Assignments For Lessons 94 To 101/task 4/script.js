"use strict"

let d = document.getElementsByTagName("div")[0];

let dChildrean = d.childNodes;
console.log(dChildrean[dChildrean.length - 1].textContent.trim());
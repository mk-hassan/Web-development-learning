"use strict"

let d1 = document.getElementsByClassName("one")[0];
let d2 = document.getElementsByClassName("two")[0];

let temp = d1.title;
d1.title = d2.title;
d2.title = temp;

temp = d1.innerText;
d1.innerText = d2.innerText;
d2.innerText = temp + " 2";


"use strict"

let elements = document.querySelectorAll(".container div");

elements.forEach(ele => {
  ele.onclick = _ => {
    elements.forEach(ele => {ele.style.color = "black";});
    ele.style.color = "red";
  }
});
"use strict"

let options = document.getElementsByTagName("li");
let div = document.querySelector(".experiment");

let color = localStorage.getItem("color");
if(color !== null) {
  for(let opt of options) {
    opt.classList.remove("active");
  }
  document.querySelector(`li[data-color=${color}]`).classList.add("active");
  div.style.backgroundColor = color;
}

for(let option of options) {
  option.onclick = function() {
    for(let opt of options) {
      opt.classList.remove("active");
    }
    let color = option.getAttribute("data-color");
    option.classList.add("active");
    div.style.backgroundColor = color;
    localStorage.setItem("color", color);
  };
};
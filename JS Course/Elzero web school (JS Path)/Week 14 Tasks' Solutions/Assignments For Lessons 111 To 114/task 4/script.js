"use strict"

let counter = document.getElementsByTagName("div")[0];

let count = this.setInterval(function() {
  counter.innerText -= 1;
  if(counter.innerText === '0') {
    location.href = "https://elzero.org";
  }
}, 1000, this);
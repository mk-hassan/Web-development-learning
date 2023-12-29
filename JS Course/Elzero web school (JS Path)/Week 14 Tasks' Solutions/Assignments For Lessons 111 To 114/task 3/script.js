"use strict"

let counter = document.getElementsByTagName("div")[0];

let count = this.setInterval(function() {
  counter.innerText -= 1;
  if(counter.innerText === '0') {
    clearInterval(count);
  }
}, 1000, this);
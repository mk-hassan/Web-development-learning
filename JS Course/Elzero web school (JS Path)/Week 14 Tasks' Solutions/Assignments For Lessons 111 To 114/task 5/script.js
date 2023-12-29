"use strict"

let counter = document.getElementsByTagName("div")[0];

let count = this.setInterval(function() {
  counter.innerText -= 1;
  if(counter.innerText === '5') {
    open("https://elzero.org", "_blank", "width=1000,height=1000,left=500;top=500;");
  }
  if(counter.innerText === '0') {
    clearInterval(count);
  }
}, 1000, this);

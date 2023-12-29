"use strict"

let interval = prompt("Print Number From – To", "Example: 5-20");

if(interval !== null) {
  let intval = interval.split("-");

  let from = Math.min(intval[0], intval[1]);
  let to = Math.max(intval[0], intval[1]);

  for(;from <= to; from++) {
    console.log(from);
  } 
}
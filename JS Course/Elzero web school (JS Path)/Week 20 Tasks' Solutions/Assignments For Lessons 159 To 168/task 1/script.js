"use strict"

let age = Date.now() - new Date("1999-09-06").getTime();

console.log(
  `
  ${Math.round(age / 1000)} Seconds
  ${Math.round(age / 1000 / 60)} minutes
  ${Math.round(age / 1000 / 60 / 60)} Hours
  ${Math.round(age / 1000 / 60 / 60 / 24)} days
  ${Math.round(age / 1000 / 60 / 60 / 24 / 30)} months
  ${Math.round(age / 1000 / 60 / 60 / 24 / 30 / 12)} years
  `
)

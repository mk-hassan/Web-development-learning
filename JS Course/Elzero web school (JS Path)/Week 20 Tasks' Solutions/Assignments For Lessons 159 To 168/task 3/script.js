"use strict"
function compileMonth(monthIndex) {
  return [
    "January", "Febraury", "March", "April",
    "May", "June", "July", "Auguest",
    "September", "October", "Novermber", "December"
  ][monthIndex];
}

let date = new Date();
date.setDate(0);

console.log(date);
console.log(`Previous Month Is ${compileMonth(date.getMonth())} And Last Day Is ${date.getDate()}`)
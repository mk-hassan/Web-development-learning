"use strict"

let dollarField = document.getElementsByTagName("input")[0];
let converter = document.getElementsByTagName("div")[0];

dollarField.onkeyup = dollarField.onchange = _ => {
  let amount = dollarField.value;
  converter.innerText = `${+amount} USD Dollar = ${amount * 31} Egyptian Pound`;
};
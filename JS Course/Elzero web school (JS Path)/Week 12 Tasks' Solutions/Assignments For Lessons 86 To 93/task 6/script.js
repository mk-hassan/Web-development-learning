"use strict"

let form = document.forms[0];
let results =  document.querySelector(".results");

form.onsubmit = event => {
  event.preventDefault();
  
  while(results.firstElementChild) {
    results.removeChild(results.lastElementChild);
  }

  let count = form.elements["elementsNo"].value, 
      text = form.elements["texts"].value, 
      type = form.elements["type"].value;
    
  for(let i = 0; i < count;  ++i) {
    let box = document.createElement(type);
    box.className = "box";
    box.title = "Element";
    box.id = `id-${i}`;
    box.innerText = text;

    results.appendChild(box);
  }
};
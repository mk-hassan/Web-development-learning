"use strict"

document.getElementsByTagName("p")[0].remove();

let d = document.getElementsByClassName("our-element")[0];

let startDiv = document.createElement("div");
startDiv.setAttribute("data-value", "Start");
startDiv.innerText = 'Start';

let endDiv = document.createElement("div");
endDiv.setAttribute("data-value", "End");
endDiv.innerText = 'End';

d.before(startDiv);
d.after(endDiv);
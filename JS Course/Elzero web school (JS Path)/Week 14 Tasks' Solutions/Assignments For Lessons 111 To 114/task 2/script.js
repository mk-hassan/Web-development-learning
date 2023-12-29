"use strict"

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "100vh";

function createPopup() {
  let popup = document.createElement("div");
  let welcome = document.createElement("h2");
  let msg = document.createElement("p");
  let close = document.createElement("span");

  popup.style.cssText = `padding: 20px; text-align: center; border-radius: 10px;
                        background-color: #eee; position: relative; width: 500px;`;
  close.style.cssText = `width: 30px; aspect-ratio: 1/1;
                        display: flex; align-items: center; justify-content: center; 
                        background-color: red; color: white; border-radius: 50%; font-size: 10px;
                        position: absolute; top: 0; right: 0; transform: translate(50%, -50%); cursor: pointer;`

  welcome.innerText = "Welcome";
  msg.innerText = "Welcome to Popup"
  close.innerText = "X";

  popup.appendChild(welcome);
  popup.appendChild(msg);
  popup.appendChild(close);
  return popup;
}

let popup = createPopup();
popup.lastElementChild.onclick = _ => popup.remove();
document.body.appendChild(popup);
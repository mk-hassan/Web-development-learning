"use strict"

let note = document.getElementsByClassName("note")[0];

note.onclick = _ => {
  let newNote = note.cloneNode(true);
  newNote.className = "newNote";
  document.body.append(newNote);
}

document.addEventListener("click", function(event) {
  if(event.target.classList.contains("newNote")) {
    event.target.style.color = "black";
  }
});
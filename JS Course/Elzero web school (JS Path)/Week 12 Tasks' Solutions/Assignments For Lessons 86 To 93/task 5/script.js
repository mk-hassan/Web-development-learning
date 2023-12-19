"use strict"

let imgs = document.images;

for(let i = 0; i < imgs.length; ++i) {
  if(imgs[i].hasAttribute("alt")) {
    let att = imgs[i].setAttribute("alt", "Old");

  } else {
    imgs[i].setAttribute("alt", "Elzero New");
  }
}
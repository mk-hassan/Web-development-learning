"use strict"

let imgs = document.images;

for(let i = 0; i < imgs.length; ++i) {
  imgs[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  imgs[i].alt = "Elzero Logo";
  imgs[i].style.backgroundColor = "black";
}
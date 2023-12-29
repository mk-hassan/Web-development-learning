"use strict"

let fontType = document.getElementsByName('font-type')[0];
let fontColor = document.getElementsByName('color')[0];
let fontSize = document.getElementsByName('size')[0];

let content = document.querySelector('.content');

let initial = {
  fontFamily: localStorage.fontFamily ?? 'Open Sans',
  fontSize: localStorage.fontSize ?? '16',
  color: localStorage.color ?? 'red',
};

content.style.fontFamily = initial.fontFamily;
content.style.fontSize = initial.fontSize + 'px';
content.style.color = initial.color;

fontType.value = initial.fontFamily;
fontSize.value = initial.fontSize;
fontColor.value = initial.color;

fontType.onchange = function() {
  localStorage.fontFamily = fontType.value;
  content.style.setProperty('font-family', `${localStorage.fontFamily}`);
};

fontColor.onchange = function() {
  localStorage.color = fontColor.value;
  content.style.setProperty('color', `${localStorage.color}`);
};

fontSize.onchange = function() {
  localStorage.fontSize = fontSize.value;
  content.style.setProperty('font-size', `${localStorage.fontSize}px`);
};

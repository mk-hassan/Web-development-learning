"use strict"

let form = document.querySelector('form');

for(let i = 0; i < form.children.length-1; ++i) {
  form.children[i].value = sessionStorage[form.children[i].name] ?? '';
}

form.lastElementChild.value = sessionStorage.age ?? 'Young';

for(let i = 0; i < form.children.length; ++i) {
  form.children[i].addEventListener('blur', function() {
    if(this.value === '') return;
    sessionStorage[this.name] = this.value;
  });
}
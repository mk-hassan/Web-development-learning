"use strict"

let xhr = new XMLHttpRequest();
xhr.open("GET", "../task 1/articles.json");
xhr.onload = function() {
  console.log(JSON.parse(this.responseText));
  console.log("data loaded");
};

xhr.onreadystatechange = function() {
  if(this.readyState === 4 && this.status === 200) {
    console.log(JSON.parse(this.responseText));
    console.log("data loaded");
  }
};

xhr.send();


console.log(xhr);
"use strict"

let xhr = new XMLHttpRequest();
xhr.open("GET", "../task 1/articles.json");
xhr.onload = function() {
  let mainData = JSON.parse(this.responseText);
  mainData.forEach(item => {
    item.category = "All";
  });
  console.log(mainData);
  let updatedData = JSON.stringify(mainData);
};

xhr.send();


console.log(xhr);
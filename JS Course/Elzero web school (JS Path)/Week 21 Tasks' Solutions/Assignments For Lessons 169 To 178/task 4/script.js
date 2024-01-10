"use strict"

let xhr = new XMLHttpRequest();

xhr.open("get", "../task 1/articles.json");

xhr.onload = function() {
  let data = JSON.parse(this.responseText);
  let container = document.createElement("div");
  container.id = "data";
  
  for(let item of data) {
    let {title, body, author, category} = item;
    let article = document.createElement("article");
    let articleTitle = document.createElement("h2");
    articleTitle.innerText = title;
    let articleBody = document.createElement("p");
    articleBody.innerText = body;
    let articleAuthor = document.createElement("p");
    articleAuthor.innerText = "Author: " + author;
    let articleCategory = document.createElement("p");
    articleCategory.innerText = "Category: " + category;
    article.append(articleTitle, articleBody, articleAuthor, articleCategory);
    container.appendChild(article);
  }

  document.body.prepend(container);
};

xhr.send();
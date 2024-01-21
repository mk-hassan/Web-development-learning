"use strict"

/*
  Regular Expression
  - Challenge
*/

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?:\/\/)?(www\.)?\w+\.(org|com|net)(:\d{4}\/)?.*/;

console.log(re.test(url1));
console.log(re.test(url2));
console.log(re.test(url3));
console.log(re.test(url4));
console.log(re.test(url5));
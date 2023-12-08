let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let counter = 1;
for(let i = 0; i < friends.length; ++i) {
  if(!(friends[i].startsWith(letter.toUpperCase()))) {
    console.log(`${counter++} => ${friends[i]}`)
  }
}
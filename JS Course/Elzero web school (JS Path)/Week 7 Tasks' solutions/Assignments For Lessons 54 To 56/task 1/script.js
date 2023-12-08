let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

let i = 1;
while(counter != friends.length) {
  if(typeof friends[counter] === 'string' && friends[counter][index] !== 'A') {
    console.log(`${i++} => ${friends[counter]}`);
  }
  counter += 1;
}
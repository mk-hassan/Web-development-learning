"use strict"

// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = function () {
      let temp = ['', '', '', ''];
      let itr = 0;
      let cnt = 0;
      for (let c of String(card)) {
        if (!isNaN(c)) {
          temp[itr] += c;
          cnt = (cnt + 1) % 4;
          if (!cnt) {
            itr++;
          }
        }
      }
      return temp.join('-');
    }();
    // this.#c = String(card).match(/\d{4}/g).join('-'); // bug brone if inconsistant pattern found
  }

  getCard() {
    return this.#c;
  }

  showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.getCard()}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData());
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData());
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData());
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
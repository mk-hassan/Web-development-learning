"use strict"

class Car {
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }

  run() {
    console.log("Car Is Running Now");
  }

  stop() {
    console.log("Car Is Stopped");
  }
};

let c1 = new Car("Mercedes", "MyBach", 3_000_000);
let c2 = new Car("X6", "BMW", 2_500_000);
let c3 = new Car("", "Cadillac", 5_000_000);

console.log(`Car One Name Is ${c1.name} And Model Is ${c1.model} And Price Is ${c1.price}`);
c1.run();
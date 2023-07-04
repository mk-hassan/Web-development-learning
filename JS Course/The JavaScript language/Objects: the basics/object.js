let user1 = {
  name: "kamal",
  age: 23
};

user1.sayHello = function() {
  console.log("Hello 1, " + this.name);
};

let user2 = {
  name: "kamal",
  age: 23,
  sayHello: function() {
    console.log("Hello 2, " + this.name);
  },
};

let user3 = {
  name: "kamal",
  age: 23,
  sayHello() {
    console.log("Hello 3, " + this.name);
  },
};

user1.sayHello();
user2.sayHello();

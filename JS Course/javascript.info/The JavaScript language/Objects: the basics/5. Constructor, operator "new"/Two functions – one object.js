//Task1 for this lesson https://javascript.info/constructor-new#two-functions--one-object

let obj = {};

function A() { 
  return obj;
}

function B() { 
  return obj;
}

let a = new A();
let b = new B();

alert( a == b );
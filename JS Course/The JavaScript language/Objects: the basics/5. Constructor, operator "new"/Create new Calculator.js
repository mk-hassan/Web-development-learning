// Task2 for this lesson https://javascript.info/constructor-new#create-new-calculator

function Calculator() {
  this.a = null;
  this.b = null;

  this.read = function() {
    this.a = +prompt("Enter first number: ");
    this.b = +prompt("Enter second number: ");
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}
// Task3 for this lesson https://javascript.info/constructor-new#create-new-accumulator

let Accumulator = function(startingValue) {
  this.value = startingValue ?? 0;

  this.read = function() {
    this.value += +prompt('Enter a value');
  }
};
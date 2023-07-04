// trunc does the same effect as floor as the Math.radom() 
// generates +ve numbers between 0 and 1
function randomInteger(min, max) {
  return Math.trunc(min + (Math.random() * (max - min + 1)));
}
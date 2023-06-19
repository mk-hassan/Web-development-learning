//Task1 for this lesson https://javascript.info/while-for#last-loop-value

// the last value printed is 1, and that's because 
// on the first iteration i = 3 is printed and then decremented to 2
// on the second iteration i = 2 is printed and then decremented to 1
// on the third iteration i = 1 is printed and then decreamented to 0
// then the condition becomes false as the value 0 is corresponding to (false) boolean value
let i = 3;

while (i) {
  console.log( i-- );
}
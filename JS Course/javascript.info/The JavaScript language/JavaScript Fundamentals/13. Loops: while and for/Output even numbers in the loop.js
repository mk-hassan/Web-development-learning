//Task4 for this lesson https://javascript.info/while-for#output-even-numbers-in-the-loop

for(let i = 1; i <= 10; ++i) {
  if(!(i & 1)) {
    console.log(i);
  }
}
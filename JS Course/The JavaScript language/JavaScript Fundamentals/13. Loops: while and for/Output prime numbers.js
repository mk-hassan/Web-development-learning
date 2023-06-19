//Task8 for this lesson https://javascript.info/while-for#output-prime-numbers

let n = prompt('Enter n', 1);

nextNumber:
for(let i = 2; i <= n; ++i) {
  for(let j = 2; j < i; ++j) {
    if(i % j == 0) {
      continue nextNumber;
    }
  }
  console.log(i);
}
let start = 10;
let end = 100;
let exclude = 40;

// Output
for(;start <= end; start += 10) {
  if(start === exclude) {
    continue;
  }
  console.log(start);
}
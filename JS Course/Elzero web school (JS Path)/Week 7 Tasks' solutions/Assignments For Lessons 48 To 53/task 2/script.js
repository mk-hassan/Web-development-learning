let start = 10;
let end = 0;
let stop = 3;

// Output
for(;start >= end; --start) {
  if(start === stop) {
    break;
  }
  if(start < 10) {
    console.log("0" + start);
  } else {
    console.log(start);
  }
}
let index = 10;
let jump = 2;

for (;;) {
  console.log(index);
  index -= jump;
  if(index == jump) {
    break;
  }
}
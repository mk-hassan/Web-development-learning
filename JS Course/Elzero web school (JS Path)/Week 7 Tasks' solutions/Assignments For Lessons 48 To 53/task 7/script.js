let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(;start != mix.length; ++start) {
  if(typeof mix[start] === 'number' && mix[start] !== 1) {
    console.log(mix[start]);
  }
}
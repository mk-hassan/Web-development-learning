let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

console.log(mix.map(ele => typeof ele === 'number' ? "" : ele).reduce((prev, curr) => prev + curr, ""));
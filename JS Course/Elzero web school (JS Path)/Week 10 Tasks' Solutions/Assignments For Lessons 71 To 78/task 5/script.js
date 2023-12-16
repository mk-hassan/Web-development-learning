let nums = [2, 12, 11, 5, 10, 1, 99];

let res = nums.reduce((prev, ele) => ele & 1 ? prev + ele : prev * ele, 1);
console.log(res);
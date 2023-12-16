function multiply(...args) {
  let res = 1;
  let flag = 0;
  for(let arg of args) {
    if(typeof arg !== 'string') {
      flag = 1;
      res *= Math.trunc(arg);
    }
  }
  console.log(flag && res);
}

multiply(10, 20); // 200
multiply("A", 10, "b", 30); // 300
multiply("A", "b"); // 300
multiply(100.5, 10, "B"); // 1000
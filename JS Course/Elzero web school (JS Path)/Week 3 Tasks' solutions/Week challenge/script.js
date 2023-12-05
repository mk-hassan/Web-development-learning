/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

// I think the correct answer should be an (undefined behaviour) due to the order of evaluation
console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a] [+]
  [++a]
  - Value:
  - Explain:
  [+]
  - Explain:
*/ 
// according to the above sequence these operations should produce 100 for all the 3 questions.

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log((++e << g) + ++f - d); // 173
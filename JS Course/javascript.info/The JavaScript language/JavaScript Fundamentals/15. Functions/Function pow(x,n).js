//Task4 for this lesson https://javascript.info/function-basics#function-pow-x-n

function pow(x, n) {
  return x ** n;
}

let x = prompt('Enter the base ?', 1), n = prompt('Enter the exponent ?', 1);
if(n < 1) {
  alert('The exponent n should be positive number.')
} else {
  alert(pow(x, n));
}
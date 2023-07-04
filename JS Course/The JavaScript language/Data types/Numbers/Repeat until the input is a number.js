function readNumber() {
  let num;

  do {
    num = prompt('Enter a number!');
  } while ( !isFinite(num) )

  return num === null || num === '' ? null : +num;
}
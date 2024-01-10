//Task6 for this lesson https://javascript.info/while-for#repeat-until-the-input-is-correct

let input;
do {
  input = prompt('Enter a number greater than 100', '');
} while(input && input <= 100)
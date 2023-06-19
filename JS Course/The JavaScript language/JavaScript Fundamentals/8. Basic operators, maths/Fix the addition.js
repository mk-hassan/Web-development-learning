// Task 4 for this lesson https://javascript.info/operators#fix-the-addition

// The erroneous code
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
// alert(a + b); // "12"

// this error because a, b are of type string and the + operator works here
// as concatenation operator between the 2 variables
// to fix this error we need to make numeric conversion for the 2 variables before adding them togeather


// fixing 
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3
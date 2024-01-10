// Task1 for this lesson https://javascript.info/function-basics#is-else-required

/*
The following function returns true if the parameter age is greater than 18.
Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
Is there any difference in the behavior of these two variants?

*/

// The function will not work differently if else is removed as when the if confition is satisfied then 
// the function will return true and stop execution so the existance of else not alter the behaviour of the 
// the function execution.
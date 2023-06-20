//Task2 for this lesson https://javascript.info/function-basics#rewrite-the-function-using-or

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

function checkAge_using_or_operator(age) {
  return age > 18 || confirm('Did parents allow you?');
}

function checkAge_using_ternary_operator(age) {
  return age > 18 ? true : confirm('Did parents allow you?');
}
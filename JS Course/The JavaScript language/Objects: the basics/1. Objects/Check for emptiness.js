//Task2 for this lesson https://javascript.info/object#check-for-emptiness

// my solution
function isEmpty(obj) {
  let cnt = 0;
  for (let key in obj) cnt++;
  return cnt === 0;
}

// better solution
function isEmpty(obj) {
  for (let key in obj) return false;
  return true;
}
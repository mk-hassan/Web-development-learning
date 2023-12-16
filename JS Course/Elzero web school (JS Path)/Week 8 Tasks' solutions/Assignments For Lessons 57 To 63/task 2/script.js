function calculate(firstNum, secondNum, operation) {
  if(firstNum === undefined || secondNum === undefined) {
    console.log("Second Number Not Found");
    return NaN;
  }

  switch (operation) {
    case "subtract":
      console.log(firstNum - secondNum);
      break;
    case "multiply":
      console.log(firstNum * secondNum);
      break;
    default:
      console.log(firstNum + secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
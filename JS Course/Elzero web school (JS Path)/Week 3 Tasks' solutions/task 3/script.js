let num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log(num << true); // 20

// Solution Three
console.log(num ** (true << true) - (num << true << true << true)); // 20

// Solution Four
console.log(num << num  ** false); // 20
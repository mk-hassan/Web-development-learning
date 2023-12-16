function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log('Age Out Of Range');
    return;
  }

  console.log(`${theAge * 12} moths`);
  console.log(`${theAge * 12 * 4} weeks`);
  console.log(`${theAge * 12 * 4 * 7} days`);
  console.log(`${theAge * 12 * 4 * 7 * 24} hours`);
  console.log(`${theAge * 12 * 4 * 7 * 24 * 60} minutes`);
  console.log(`${theAge * 12 * 4 * 7 * 24 * 60 * 60} seconds`);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
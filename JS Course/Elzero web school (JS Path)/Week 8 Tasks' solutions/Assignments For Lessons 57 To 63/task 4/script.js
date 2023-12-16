function showDetails(a, b, c) {
  let name = typeof a === 'string' ? a : typeof b === 'string' ? b : c;
  let age = typeof a === 'number' ? a : typeof b === 'number' ? b : c;
  let status = typeof a === 'boolean' ? a : typeof b === 'boolean' ? b : c;

  let msg = `Hello ${name}, Your Age Is ${age}, ` + (status ? "You Are Available For Hire" : "You Are Not Available For Hire");
  console.log(msg);
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

if(myAdmins.includes("Stop")) {
  myAdmins.length = myAdmins.indexOf("Stop");
}

document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
document.write("<hr />");

for(let i = 0; i < myAdmins.length; ++i) {
  document.write(`
      <div>
        The Admin For Team ${i + 1} is ${myAdmins[i]}
        <h3>Team Members: </h3>
  `);
  let emps = myEmployees.filter((emp_name) => emp_name.startsWith(myAdmins[i][0]));
  for(let j = 0; j < emps.length; ++j) {
    document.write(`
      <p>${j + 1}- ${emps[j]}</p>
    `);
  }
  document.write(`</div>`);
  document.write('<hr />')
}

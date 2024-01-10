// Task9 for this lesson https://javascript.info/logical-operators#check-the-login

let login = prompt('Enter login ?', '');

if(login === 'Admin') {
  let password = prompt('Enter password ?', '');
  if(password === 'TheMaster') {
    alert('Welcome!');
  } else if (password === null || password === '') {
    alert('Cancelled');
  } else {
	alert('Wrong password');
  }
} else if(login === null || login === '') {
  alert('Cancelled');
} else {
  alert("I don't know you");
}




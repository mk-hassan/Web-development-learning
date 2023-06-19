//Task5 for this lesson https://javascript.info/ifelse#rewrite-if-else-into

let login = prompt('Enter role ?', '');
let message = login == 'employee' ? 'Hello' : 
                       login == 'Director' ? 'Greetings' :
                       login == '' ? 'No login' : '';
console.log(message);
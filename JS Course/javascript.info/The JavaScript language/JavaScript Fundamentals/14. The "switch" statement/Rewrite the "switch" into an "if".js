//Task1 for this lesson https://javascript.info/switch#rewrite-the-switch-into-an-if

// write the following code using if...else variant instead of if
/*
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/

if(browser === 'Edge') {
  alert("You're got the Edge!");
} else if(browser === 'Chrome' 
          || browser === 'Firefox' 
          || browser === 'Safari' 
          || browser === 'Opera') {
  alert('Okay we support these browsers too');
} else {
  alert('We hope that this page looks ok!');
}
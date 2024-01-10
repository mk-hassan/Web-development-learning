//Task4 for this lesson https://javascript.info/logical-operators#what-is-the-result-of-and-ed-alerts

// this code alert( alert(1) && alert(2) ); shows (undefined) as the first aperand is evaluated
// (alert(1)) showing 1 but the alert returns undefined which converted to false by the && operator
// making it as the first falsy value and (undefined) is returned.


alert( alert(1) && alert(2) );
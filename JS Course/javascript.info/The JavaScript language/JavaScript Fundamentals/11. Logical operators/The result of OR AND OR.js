//Task5 for this lesson https://javascript.info/logical-operators#the-result-of-or-and-or

// this code alert( null || 2 && 3 || 4 ); shows 3
// explanation: 
// 1. The sub-expression 2 && 3 is evaluated first due to the precedance of the and operator
//    and as there is no falsy value the last operand is returned as is so it returns 3
// 2. then null || 3 || 4 is evaluted and it returns 3 as it's the first truthy value 
// 3. then alert function shows the number 3


alert( null || 2 && 3 || 4 );
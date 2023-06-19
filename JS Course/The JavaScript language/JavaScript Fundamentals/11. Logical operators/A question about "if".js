//Task8 for this lesson https://javascript.info/logical-operators#a-question-about-if

// Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?

// -1 || 0 return -1 as it's the first truthy value
// the statement alert('first') will be executed
if (-1 || 0) alert( 'first' );

// -1 && 0 return 0 as it's the fiest falsy value
// the statement isn't executed 
if (-1 && 0) alert( 'second' );

// null || -1 && 1 => null || 1 => 1 
// the statement will be executed
if (null || -1 && 1) alert( 'third' );
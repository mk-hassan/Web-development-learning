"use strict"

document.addEventListener('click', function(event) {
    let clicked = event.target.tagName;
    if(clicked !== 'HTML' && clicked !== 'BODY') {
        console.log(`This Is ${event.target.tagName}`);
    }
});
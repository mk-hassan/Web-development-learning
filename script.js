"use strict"

let opened = window.open("https://google.com", "_blank");


setTimeout(function() {opened.focus(); opened.close()}, 5000);

history.go
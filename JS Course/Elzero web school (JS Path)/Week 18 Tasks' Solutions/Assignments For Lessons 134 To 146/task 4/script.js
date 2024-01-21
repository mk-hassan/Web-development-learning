"use strict"

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// (?:pattern) => non-capturing group
/*
http or https
://
(- or letter one or more times then a period) no matter exists or not
- or letter one or more times then a period
a letter one or more times
(a period followed by one or more letters)no matter exists or not
then ann optional / 
then any thing can follow this pattent
*/
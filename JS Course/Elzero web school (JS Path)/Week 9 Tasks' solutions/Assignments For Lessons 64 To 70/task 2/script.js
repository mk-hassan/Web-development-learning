// function itsMe() {
//   return `Iam A Normal Function`;
// }

let itsMe = _ => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function


let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
let start = 0;
let swappedName = "elZerO";

let res = "";
for(; start != swappedName.length; ++start) {
  if('a' <= swappedName[start] &&  swappedName[start] <= 'z') {
    res += swappedName[start].toUpperCase();
  } else {
    res += swappedName[start].toLowerCase();
  }
}

console.log(res);
//Task4 for this lesson https://javascript.info/object#multiply-numeric-property-values-by-2

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
       obj[key] *= 2
    }
  }
}

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);
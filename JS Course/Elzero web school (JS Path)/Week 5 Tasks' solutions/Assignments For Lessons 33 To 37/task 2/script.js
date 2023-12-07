let num1 = 9;
let str = "9";
let str2 = "20";

// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"

if (num1 == str) {
  console.log(`{num1 Is The Same Value As {str}`);
  if (typeof num1 == typeof str) {
    console.log(`{num1 Is The Same Value and the Same Type As {str}`);
  } else {
    console.log(`{num1} Is The Same Value As {str} But Not The Same Type`);
  }
} else if (num1 != str) {
  console.log(`{num1} Is not The Same Value As {str}`);
  if (typeof num1 == typeof str) {
    console.log(`{num1} Is Not The Same Value As {str} But The Same Type`);
  } else {
    console.log(`{num1} Is Not The Same Value Or The Same Type As {str}`);
  }
}

if (num1 == str2) {
  console.log(`{num1} Is The Same Value As {str2}`);
  if (typeof num1 == typeof str2) {
    console.log(`{num1 Is The Same Value and the Same Type As {str2}`);
  } else {
    console.log(`{num1} Is The Same Value As {str2} But Not The Same Type`);
  }
} else if (num1 != str2) {
  console.log(`{num1} Is nnot The Same Value As {str2}`);
  if (typeof num1 == typeof str2) {
    console.log(`{num1} Is Not The Same Value As {str2} But The Same Type`);
  } else {
    console.log(`{num1} Is Not The Same Value Or The Same Type As {str2}`);
  }
}

if (str == str2) {
  console.log(`{str} Is The Same Type ans The Same Value {str2}`);
} else {
  console.log(`{str} Is The Same Type As {str2} But Not The Same Value`);
}
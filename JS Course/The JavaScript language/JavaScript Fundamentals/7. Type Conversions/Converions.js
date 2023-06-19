let undefined_variable;
let null_variable = null;
let boolean_false_variable = false;
let boolean_true_variable = true;
let string_contains_numbers = 'kamal23342fda';
let string_starts_with_numbers = '231980mahmoud';
let string_starts_with_white_space_then_number = '   432kofds';
let string_contains_only_numbers = '     03218940';

console.log(`converting ${undefined_variable} : ${Number(undefined_variable)}`);
console.log(`converting ${null_variable} : ${Number(null_variable)}`);
console.log(`converting ${boolean_false_variable} : ${Number(boolean_false_variable)}`);
console.log(`converting ${boolean_true_variable} : ${Number(boolean_true_variable)}`);
console.log(`converting ${string_contains_numbers} : ${Number(string_contains_numbers)}`);
console.log(`converting ${string_starts_with_numbers} : ${Number(string_starts_with_numbers)}`);
console.log(`converting ${string_starts_with_white_space_then_number} : ${Number(string_starts_with_white_space_then_number)}`);
console.log(`converting ${string_contains_only_numbers} : ${Number(string_contains_only_numbers)}`)

// string conversions
console.log(String(undefined_variable))
console.log(String(null_variable))

// play with numbers
console.log(NaN ** 1)
# Array methods notes
Arrays provide a lot of methods. To make things easier, in this chapter they are split into groups.

## Add/Remove items

- **Push** adds items to the end of the array.
- **Pop** extracts items from the end of the array.
- **shift** extracts items from the beginning of the array.
- **unshift** adds items to the beginning of the array.
---
### splice
- The arr.splice method is a swiss army knife for arrays. It can do everything: *insert*, *remove* and *replace* elements.
- Negative indexes allowed.
- We can't just use the `delete` keyword to remove element from the array as it will remove the element without updating the array as we want the rest of elements to shift and occupy the freed place. That’s natural, because delete obj.key removes a value by the key. It’s all it does. Fine for objects. But not for arrays so we needed `splice`.

#### Syntax
```javascript
arr.splice(start[, deleteCount, elem1, ..., elemN])
```

#### How it works ?
It ***modifies*** arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. ***Returns*** the array of removed elements.

#### Return
An array of removed elements.

#### Cases 
```javascript
let arr1 = ["I", "study", "JavaScript"];
arr1.splice(1, 1); // ["I", "JavaScript"]

let arr2 = ["I", "study", "JavaScript", "right", "now"];
arr2.splice(0, 3, "Let's", "dance"); // ["Let's", "dance", "right", "now"]

let arr3 = [1, 2, 3, 4, 5, 6]
let removedItems = arr3.splice(1, 2, 10);
console.log(arr3); // [1, 10, 4, 5, 6]
console.log(removedItems) // [2, 3]

// The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:
let arr4 = ["I", "study", "JavaScript"];
arr4.splice(1, 0, "don't"); //["I", "don't", "study", "JavaScript"]
```
---
### slice
- Makes subarray. 
#### Syntax
```javascript
arr.slice([start], [end])
```
#### How it works ?
- It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.
- If end not specified then copying elements from start idex to the end of the array into a new array and returns the new array.
- If start and end not specified then copying the whole array elements into a new array and returns the new array.

#### Returns
returns a `new array` contains elements form the start index to the end index - 1

#### Cases
```javascript
let arr = ["t", "e", "s", "t"];
arr.slice(1, 3); // e,s (copy from 1 to 3)
arr.slice(-2); // s,t (copy from -2 till the end)
```
---
### concat
- The method arr.concat creates a new array that includes values from other arrays and additional items.

#### Syntax
```javascript
arr.concat(arg1, arg2...)
```
#### How it works ?
- It accepts any number of arguments – either arrays or values.
- The result is a new array containing items from arr, then arg1, arg2 etc.
- If an argument argN is an array, then all its elements are copied. Otherwise, the argument itself is copied.

#### Returns
-  returns a new array contains the items of the calling array concatenated with the passed elements.

#### Cases
```javascript
let arr = [1, 2];
arr.concat([3, 4]); // 1, 2, 3, 4
arr.concat([3, 4], [5, 6]); // 1, 2, 3, 4, 5, 6
arr.concat([3, 4], 5, 6); // 1, 2, 3, 4, 5, 6
```

#### Edge cases
Any other type of elements except arrays and primitives are added as is even if it was array like Objects.
- Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:
```javascript
let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

arr.concat(arrayLike); // 1,2,[object Object]
```
But if the array-like object has a special property called `Symbol.isConcatSpreadable` then this object is treated as an array, and it's elements are added instead of the object itself.
```javascript
let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,something,else
```

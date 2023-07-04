//Task1 for this lesson https://javascript.info/object-methods#using-this-in-object-literal

/*
Here the function makeUser returns an object.

What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result? 

Answer:
  user.ref.name raises an error as this is undfined in this case.
*/
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

// This makes a reference copy. Objects in javascript doesnt behave as primitives. 
// When you use them, you dont take their values, you take their reference in memory
// When one changes, the other will change, becouse they both are the same object.
// They are two variables pointing to the same object
const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon"

console.log(person1);
console.log(person2);

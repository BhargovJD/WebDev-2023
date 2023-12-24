// console.log("hello");


// Default Params
function names(name1,name2="bkon",name3="ckon"){
    console.log(`${name1}, ${name2}, ${name3}`)
}

names("firstName");


// Spread Operator
// convert into individual elements
// Array Spreading

const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];

console.log(moreNumbers);



// Objects
const person = { name: 'Alice', age: 30 };
const details = { ...person, country: 'Wonderland' };

console.log(details);



// Rest parameter
// Within function parameters, it's used as the rest parameter to collect multiple arguments into an array:
function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

function raceResult(name1,name2,...others){
    console.log(`First: ${name1}, Second: ${name2}, Others: ${others}`)
}

raceResult("akon","bkon","ckon","dkon")


// destructuring assignment allows you to extract values from arrays or properties from objects into distinct variables easily. It provides a concise way to 'unpack' values from arrays or objects into variables.


// Array Destructuring
// With arrays, you can extract values based on their position:
// Example:
const nmbrs = [1, 2, 3, 4, 5];

const [first, second, ...rest] = nmbrs;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]


// Object Destructuring
// With objects, you can extract values based on their property names:
// Example:
const persons = { name: 'Alice', age: 30, country: 'Wonderland' };
const { name, age } = persons;
console.log(name);
console.log(age);



// You can also assign to different variable names:
// Example:

const prsn = { name: 'Alice', age: 30, country: 'Wonderland' };

const { name: fullName, age: personAge } = person;

console.log(fullName); // Output: 'Alice'
console.log(personAge); // Output: 30



// Nested Destructuring

// Destructuring can also be used for nested structures:
// Example:

const detail = {
  nam: 'Bob',
  age: 25,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const {
  nam,
  address: { city, country }
} = detail;

console.log(nam); // Output: 'Bob'
console.log(city); // Output: 'New York'
console.log(country); // Output: 'USA'



// Destructuring params

// In JavaScript, you can use destructuring directly within function parameters, allowing you to extract specific values from objects or arrays passed as arguments to the function. This feature simplifies access to nested objects or arrays.

// Object Destructuring in Function Parameters

function greet({ name, age }) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

const persn = { name: 'Alice', age: 30 };
greet(persn); // Output: Hello, Alice! You are 30 years old.


// Array Destructuring in Function Parameters
function getScores([first, second, ...rest]) {
  console.log(`Top scores: ${first}, ${second}`);
  console.log(`Other scores: ${rest}`);
}

const scores = [98, 95, 88, 72, 64];
getScores(scores);
// Output:
// Top scores: 98, 95
// Other scores: 88,72,64



// Combining Object and Array Destructuring
// You can even mix object and array destructuring within function parameters:


function processUser({ name, age, scores: [first, second, ...rest] }) {
  console.log(`User: ${name}, Age: ${age}`);
  console.log(`Top scores: ${first}, ${second}`);
  console.log(`Other scores: ${rest}`);
}

const user = { name: 'Bob', age: 25, scores: [78, 85, 69, 72] };
processUser(user);
// Output:
// User: Bob, Age: 25
// Top scores: 78, 85
// Other scores: 69,72







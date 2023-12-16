let days = ["M","T","W"];

console.log(days)

console.log(days.length)


// Access
console.log(days[0]);

// Updating array element. Can not do in String.
days[0] = "Monday";
console.log(days);


days[10] = "xXx";
console.log(days);

// Built in array methods
// Push pop : Works in very end in array

days.push("T","F");
console.log(days);

days.pop();
console.log(days);


// Shift , Unshift : Works in starting point

// delete
days.shift();
console.log(days);

// add
days.unshift("TT");
console.log(days);


// Concat

let arrayA = ['a','b','c'];
let arrayB = ['d','e','f'];

console.log(arrayA.concat(arrayB));

console.log(arrayA.includes('a'));

console.log(arrayA.indexOf('c'));
console.log(arrayA.indexOf('f'));
console.log(arrayA.reverse());


// Slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


// Based on UTF-16 code
let scores = [1,2,3,4,5,6,99,214];
console.log(scores.sort());


// multidimensional array
let studentsData = [['Jack', 24], ['Sara', 23], ['Peter', 24]];

console.log(studentsData[1][0]);











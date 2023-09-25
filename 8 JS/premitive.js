// NS BNU - Primitive Data Types

// Number
// String
// Boolean
// NUll : Intentional absence. Must be assigned
// Undefined : No value. I dont know the value. Declared but not defined.

// PEMDAS : Calculation Priority

// 4+3*4/2 = 4 + 12 / 2 = 4+6 = 10
// (13%5) ** 2 = 3 ** 2 = 9
// 200 + 0/0 = NaN (Not a number) = typeof NaN is number

score = 5;
5
score += 2;
7  



// String
const bestColor = "purple";

const quote =  'You had me at "hello"';

var name = "Bhargov"

name[0]
"B"


// Accessing proprtties
name.length
7


var fName = "A"
var lName = "B"
var fullName = fName+lName;

fullName

"AB"

// We can not update a declared string.



1+"Hi"
"1Hi" 


// String methods
fullName.toUpperCase() 

var emptySpace = "         Bhargov    ";
emptySpace
"         Bhargov    "
emptySpace.trim()
"Bhargov" 


// Chaining methods
emptySpace.trim().toUpperCase() 


// Methods with arguments
emptySpace.indexOf("B")

// NOt include the last one
emptySpace.slice(12,13)
"r" 
emptySpace.slice(12)
"rgov"

emptySpace.slice(-1) 


var name = "Chargov"; 
name.replace("C","B")
"Bhargov"

"Yo".repeat(10);
"YoYoYoYoYoYoYoYoYoYo" 

// Template literals
var name = "Bhargov";
`My name is ${name}`;
"My name is Bhargov" 


// Math Object
Math.PI
3.141592653589793
Math.floor(13.99999)
13 

// value between 0-1
Math.random()  

// Random number between 0 - 5
Math.floor(Math.random()*5)+1


// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
const roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1+die2}`;



var num = "132er";
parseInt(num)
132

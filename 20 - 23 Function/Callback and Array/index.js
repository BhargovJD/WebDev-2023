// console.log("Hello");

const nums = [1,2,3,4,5,6,7,8,9,0];

function print(el){
console.log(el)
}

print(nums[0])
print(nums[1])

console.log("...............")

nums.forEach(print)

console.log("...............")

for(let el of nums){
    console.log(el)
}

console.log("...............")

nums.forEach(function(el){
    console.log(el)
})

console.log("...............")

nums.forEach(function(el){
    if(el % 2 === 0){
    console.log(el)
    }
})

console.log("...............")

const movies = [
    {
        name:"movie a",
        rating:5
    },
        {
        name:"movie b",
        rating:2
    },
        {
        name:"movie c",
        rating:3
    }
]

movies.forEach(function(movie){
    console.log(movie)
})

console.log("...............")

movies.forEach(function(movie){
    console.log(`${movie.name}-${movie.rating}/10`)
})

// MAPS: Create a new array
const doubles = nums.map(function(num){
    return num*2;
})

console.log(doubles)

console.log("...............")

const movieName = movies.map(function(movie){
    return movie.name;
})

console.log(movieName)

// ARROW FUNCTION

const add = function(x,y){
    return x+y;
}
console.log(add(2,3))


const sub = (x,y)=>{
    return x-y;
}
console.log(sub(2,3))


const name = ()=>{
    return "Bhargov";
}
console.log(name())


const square = n =>{
    return n*n;
}
console.log(square(3))


const greet = name =>{
    return `Hey ${name}!`;
}

console.log(greet("Luna"))

// Implicit return

const city = (c) =>(
    c
);

console.log(city("Ghy"))
// or
const adds = (n) => n+n;
console.log(adds(5))


// setTimeout
console.log("Hello");
setTimeout(()=>{
    console.log(".....are you there???")
},3000)

console.log("Hello 2");

// setInteral

const id = setInterval(()=>{
    console.log(Math.random())
},2000)

clearInterval(id);

// Filter: Filter out and store in a new variable
// An array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to get only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]


function validUserNames(usernames) {
      return usernames.filter(username => username.length < 10);
}

console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']));



// Every
const num = [2, 4, 6, 8, 10];

// Check if all numbers are even
const allEven = num.every(n => n % 2 === 0);

console.log(allEven); // Output: true


// Some

const n = [1, 3, 5, 7, 8, 9];

// Check if there is at least one even number
const hasEvenNumber = n.some(num => num % 2 === 0);

console.log(hasEvenNumber); // Output: true



const allEvens = (num)=>{
    return num.every(n => n % 2 === 0);
}

console.log(allEvens([2,4,6,8])) //true
console.log(allEvens([1,4,6,8])) //false
console.log(allEvens([1,2,3])) //false


// Reduce
const count = [1, 2, 3, 4, 5];

// Using reduce to sum all numbers in the array
const sum = count.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15 


const nmb = [1, 2, 3, 4, 5];

// Using reduce to sum all numbers in the array starting from an initial value of 10
const sumWithInitialValue = nmb.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 10);

console.log(sumWithInitialValue); // Output: 25 (10 + 1 + 2 + 3 + 4 + 5 = 25)








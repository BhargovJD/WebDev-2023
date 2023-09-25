console.log("Hello");

if(1+1 === 2){
    console.log("correct");
}


var rating = 456;

if(rating === 3){
    console.log("Rating is 3");
}
else if(rating === 4){
    console.log("Rating is 4");
}
else{
    console.log("Rating is not detected");
}


 
var input = prompt("Enter a number");

console.log(`The number is ${input}`);



var pass = prompt("Enter pasword");
if(pass === "abcde"){
    if(pass.length >=3){
        console.log("Passord is abcde and greater than 3 characters");
    }
}
else{
    console.log("Password not detected");
}


// logical condition and or not : &&, ||, !

var age = 18;
if( age >=18 && age <=30){
    console.log("You are young");
}


// Switch

var day = 1;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuseday");
        break;
    default:
        console.log("I dont know");

}

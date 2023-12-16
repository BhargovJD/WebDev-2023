function printHeart(){
    console.log("<3");
}

printHeart();



function rant(message){
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}

rant("I HATE BEETS");



function isSnakeEyes(num1,num2) {
    if(num1==1 && num2==1){
        console.log("Snake Eyes!");
    }
    else{
        console.log("Not Snake Eyes!");
    }
}

// isSnakeEyes(1,1)
// isSnakeEyes(1,2);



function multiply(a,b){
    return a*b;
}

const result = multiply(2,4);
console.log(result);


// DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(temperature){
    if(temperature >=75){
        return true;
    }
    else{
        return false;
    }
}

isShortsWeather(80);
isShortsWeather(48);
isShortsWeather(75);



function lastElement(arrElement){
    if (arrElement[arrElement.length-1] == null){
        return null;
    }
    return arrElement[arrElement.length-1];
    
}

// let element = lastElement([3,5,7]);
// let element = lastElement([1]);
let element = lastElement([]);

console.log(element);



// DEFINE YOUR FUNCTION BELOW:
function capitalize(strng){
   var firstStr = strng.slice(0,1).toUpperCase();
   var secondStr = strng.slice(1);
   return firstStr+secondStr;
}

var op = capitalize('eggplant');
console.log(op);




// DEFINE YOUR FUNCTION BELOW:

function sumArray(arr){

    let sum = 0;
    for(let i=0; i<arr.length; i++){
        // console.log(arr[i]);
      sum = sum+arr[i]; 
    }
    
    return sum;
    
}

let resultSum = sumArray([2,2,2,2]);
console.log(resultSum);





function returnDay (num){

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    for (let i = 0; i <= days.length; i++)

{
    if (num < 1 || num > 7)

            {
                return null;
                
            }

else

          {
              return days[num-1];
              
          }

}

}

console.log('hello')
function getRandomInt(max) {
console.log(Math.floor(Math.random() * max));
return Math.floor(Math.random() * max);
}
let number;
let comparer;
function moduloEx7(number, comparer) {
  let newString='';
    if (number > comparer) {
    newString=`The number ${number} is bigger than ${comparer}`;
    if (number % comparer !==0) {
     newString=`The number ${number} is bigger than ${comparer}. But the modulo of ${number} % ${comparer} is ${number % comparer}`
    }
    } else if (number === comparer) 
    { newString=`The number ${number} is equal to ${comparer}`
    }else {
    newString=`The number ${number} is less than ${comparer}`
    }
    console.log(newString);
    return newString;
  }

document.getElementById('string').innerHTML=moduloEx7(getRandomInt(100),getRandomInt(100));
  
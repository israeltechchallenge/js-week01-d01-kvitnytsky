

  

  function moduloEx6(number, comparer) {
  let newString='';
    if (number > comparer) {
    newString=`The number ${number} is bigger than ${comparer}`;
    if (number % comparer !== 0) {
     newString=`The number ${number} is bigger than ${comparer}. But the modulo of ${number} % ${comparer} is ${number % comparer}`
    }
    } else if (number === comparer) 
    { newString=`The number ${number} is equal to ${comparer}`
    }else {
    newString=`The number ${number} is less than ${comparer}`
    }
    return newString;
  }
string=document.getElementById('string');
string.innerHTML=moduloEx6(5,6);
alert('hello');
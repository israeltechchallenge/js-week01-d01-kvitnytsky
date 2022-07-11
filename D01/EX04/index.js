function modulo(numberOne,numberTwo) {
  if (numberOne > numberTwo) {
    console.log(`The number ${numberOne} is bigger than ${numberTwo}`) 

    if (numberOne % numberTwo !== 0) {
       console.log(`The modulo of ${numberOne} % ${numberTwo} is ${numberOne % numberTwo}`) 
      }
    }

    else if (numberOne === numberTwo) {
      console.log(`The number ${numberOne} is equal to ${numberTwo}`);
    }

    else {
      console.log(`The number ${numberOne} is less than ${numberTwo}`);
    }
}


// Do not remove or change this line, or the tests won't work
export { modulo };

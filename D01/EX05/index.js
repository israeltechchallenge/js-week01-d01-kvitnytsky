function moduloEx5(numberOne, numberTwo) {
let newString='';
if (numberOne > numberTwo) {
newString=`The number ${numberOne} is bigger than ${numberTwo}`;
if (numberOne % numberTwo !== 0) {
newString=`The number ${numberOne} is bigger than ${numberTwo}. But the modulo of ${numberOne} % ${numberTwo} is ${numberOne % numberTwo}`
 }}
 else if (numberOne === numberTwo) {
newString=`The number ${numberOne} is equal to ${numberTwo}`
}

else {
newString=`The number ${numberOne} is less than ${numberTwo}`
}
console.log(newString);
}

// Do not remove or change this line, or the tests won't work
export { moduloEx5 };

function divide(firstNumber, secondNumber) {
    console.log('firstNumber: ' + firstNumber);
    console.log('secondNumber: ' + secondNumber);
    return Math.round(firstNumber / secondNumber);
}
let result = divide( 3);
console.log('value: ' + result);
console.log(typeof result);

// result = NaN Not a number
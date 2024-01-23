/**
 * 
 * @param {any} firstNumber
 * @param {any} secondNumber
 */
function divide(firstNumber, secondNumber) {
    console.log('firstNumber: ' + firstNumber);
    console.log('secondNumber: ' + secondNumber);
    return Math.round(firstNumber / secondNumber);
}
function isEvenNumber(number) {
    return number % 2 === 0;
}
module.exports = {
    divide: divide,
    isEvenNumber: isEvenNumber
}
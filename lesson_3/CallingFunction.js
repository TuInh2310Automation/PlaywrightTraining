
//const NumberHandler = require('../utils/NumberHandler');
const {
    divide,
    isEvenNumber
} = require('../utils/NumberHandler')

//dot notation
let result = divide(10, 3)
console.log('Result ', result);
console.log('Is 5 even ', isEvenNumber(5));

function doSth(number) {
    NumberHandler.isEvenNumber(number);
}
const filterEvenNumbers = function (value, index, array) {
    return value % 2 === 0;
}

const filterOddNumbers = function (value, index, array) {
    return value % 2 !== 0;
}
function filterGreater3Number(value, index, array) {
    console.log("Processing at index", index);
    return value > 3;
}

function convertToEvenNumbers(value, index, array) {
    if (value % 2 === 1) {
        return value * 2;
    } else {
        return value;
    }

}
function sortNumberASC(firstNum, secondNum) {
    return firstNum - secondNum;
}

function sortNumberDESC(firstNum, secondNum) {
    return secondNum - firstNum;
}

module.exports = {
    filterEvenNumbers: filterEvenNumbers,
    filterOddNumbers: filterOddNumbers,
    sortNumberASC: sortNumberASC,
    sortNumberDESC: sortNumberDESC ,
    convertToEvenNumbers: convertToEvenNumbers,
    filterGreater3Number: filterGreater3Number
}